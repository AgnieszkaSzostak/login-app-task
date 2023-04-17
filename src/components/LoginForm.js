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
    const [validationErrors, setValidationErrors] = useState({
            email: '',  
            userName: '',
            password: '',
    });
    const [form, setForm] = useState({
        email: '',  
        userName: '',
        password: '',
    })
    useEffect(() => {
        if( validationErrors.email.length > 0){
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

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value 
        })
        setError(null);
        setValidationErrors({...validationErrors, [name]: ''})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(form);
        errors.email.length > 0 || 
        errors.userName.length > 0 || 
        errors.password.length > 0 
            ? setValidationErrors(errors)
            : logIn(form)
                .then(data => {
                    sessionStorage.setItem("token", data.token);
                    setIsLogged(true);
                })
                .then()
                .catch(err => {
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
    const handleClick = () => {
        setSubpage(2);
        setError(null);
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
                            <Field value={form.email} name="email" type="email" label="email" onChange={e =>handleChange(e)} error={validationErrors.email}/>
                            <button className="form__button" onClick={handleClick}>Next</button>
                        </>
                    )
                    :
                    (
                        <>
                            <Field value={form.userName} name="userName" type="text" label="login" onChange={e =>handleChange(e)} error={validationErrors.userName}/>
                            <Field value={form.password} name="password" type="password" label="password" onChange={e =>handleChange(e)} error={validationErrors.password}/>
                            <input className="form__button" type="submit" value="submit"/>
                        </>
                    )}
            </StyledForm>
            {error && <Error message={error}></Error>}
        </>
    )
}

export default LoginForm;
