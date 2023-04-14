import React, {useEffect, useState} from "react";
import { validateForm } from "../helpers/validator";
import { authorize, logIn } from "../api/fetchData";
import StyledForm from "./StyledLoginForm.styled";

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
        if(isLogged){
            authorize()
                .then(resp => setLoggedUser(resp.fullUserName))
                .catch(err => console.error('errAuth', err))
                .finally(setForm({ 
                    email: '',  
                    userName: '',
                    password: '',
                }))
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
        errors.length > 0  
        ? setValidationErrors(errors) 
        : logIn(form)
            .then(data => {
                sessionStorage.setItem("token", data.token);
                setIsLogged(true);
            })
            .catch(err => {
                console.error('errLogin', err);
                if(err.message === "Bad Request"){
                    setError("Wrong data")
                }else if(err.message === "Unauthorized"){
                    setError("Wrong credentials")
                }
            })
    }

    return (
        <>
            <StyledForm className="form" onSubmit={handleSubmit}>
                {subpage === 1 
                    ? 
                    (
                        <>  
                            {/* <label>email</label> */}
                            <input className="form__input" value={form.email} placeholder="email" type="email" name="email" onChange={(e) => handleChange(e)}></input>
                            <button className="form__button form__button--next" onClick={handleClick}>Next</button>
                        </>
                    )
                    :
                    (
                        <>
                            {/* <label>login</label> */}
                            <input className="form__input" value={form.userName} placeholder="login" type="text" name="userName" onChange={(e) => handleChange(e)}></input>
                            {/* <label>password</label> */}
                            <input className="form__input" value={form.password} placeholder="password" type="password" name="password" onChange={(e) => handleChange(e)}></input>
                            <input className="form__button form__button--submit" type="submit" value="submit"/>
                        </>
                    )}
            </StyledForm>
            {validationErrors 
                ? validationErrors.map((error, index) => <p key={index}>{error}</p>)
                : null
            }

            {error && <p>{error}</p>}
        </>
    )
}

export default LoginForm;