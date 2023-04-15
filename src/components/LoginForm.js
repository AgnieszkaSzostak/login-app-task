import React, {useEffect, useState} from "react";
import { validateForm } from "../helpers/validator";
import { authorize, logIn } from "../api/fetchData";
import StyledForm from "./StyledLoginForm.styled";
import Field from "./Field";
import Error from "./Error";

const LoginForm = (props) => {
    const {setLoggedUser} = props;
    const [subpage, setSubpage] = useState(1);
    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = useState(null);
    const [validationErrors, setValidationErrors] = useState(null);
    const [form, setForm] = useState({
        email: '',  
        userName: '',
        password: '',
    })

    useEffect(() => {
        if( validationErrors && validationErrors.email){
            setSubpage(1);
        }
    },[validationErrors, setSubpage])

    useEffect(() => {
        if(isLogged){
            authorize()
                .then(resp => setLoggedUser(resp.fullUserName))
                .catch(err => console.error('errAuth', err))
        }
    }, [isLogged, setLoggedUser])

    const handleClick = () => {
        setSubpage(2)
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(form);
        console.log(form);
        errors !== null 
        ? setValidationErrors(errors)
        : logIn(form)
            .then(data => {
                sessionStorage.setItem("token", data.token);
                setIsLogged(true);
            })
            .then()
            .catch(err => {
                console.error('errLogin', err);
                if(err.message === "Bad Request"){
                    setError("Wrong data")
                }else if(err.message === "Unauthorized"){
                    setError("Wrong credentials")
                }
            })
            .finally(()=> {
                setForm({ 
                    email: '',  
                    userName: '',
                    password: '',
                });
                setSubpage(1);
            })
    }
    if(isLogged) {
        return null
    }
    return (
        <>
        
            <StyledForm className="form" onSubmit={handleSubmit}>
                {subpage === 1 
                    ? 
                    (
                        <>  
                            <Field value={form.email} name="email" type="email" label="email" onChange={e =>handleChange(e)} error={validationErrors ? validationErrors.email : null}/>
                            <button className="form__button form__button--next" onClick={handleClick}>Next</button>
                        </>
                    )
                    :
                    (
                        <>
                            <Field value={form.userName} name="userName" type="text" label="login" onChange={e =>handleChange(e)} error={validationErrors ? validationErrors.userName : null}/>
                            <Field value={form.password} name="password" type="password" label="password" onChange={e =>handleChange(e)} error={validationErrors ? validationErrors.password : null}/>
                            <input className="form__button form__button--submit" type="submit" value="submit"/>
                        </>
                    )}
            </StyledForm>
            {error && <Error message={error}></Error>}
        </>
    )
}

export default LoginForm;