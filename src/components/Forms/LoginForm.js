import React, {useEffect, useState} from "react";
import { validateForm } from "../../helpers/validator";
import { authorize, logIn } from "../../api/fetchData";
import StyledForm from "./StyledForm.styled";
import Field from "../Field/Field";
import Error from "../Error/Error";
import StepContainer from "../Step/StepContainer";

const LoginForm = (props) => {
    const {setLoggedUser, token} = props
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

    useEffect(()=>{
        if(token){
            authorize(token)
                .then(resp => setLoggedUser(resp.fullUserName))
                .catch(err => console.error('errAuth', err))
        }
    },[])
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
        setError(null);
        form.email.length > 0
            ? setSubpage(2)
            : setValidationErrors({...validationErrors, email: 'Email is required!'})
    }
  
    if(isLogged || token) {
        return null
    }
    return (
        <>
            <StyledForm novalidate className="form" onSubmit={handleSubmit}>
                <h1 className="form__title">Login to your account</h1>
                {subpage === 1 
                    ? 
                    (
                        <>  
                            <Field value={form.email} name="email" type="email" placeholder="Enter your email" label="email" onChange={e =>handleChange(e)} error={validationErrors.email}/>
                            <button className="form__button" onClick={handleClick}>Next</button>
                        </>
                    )
                    :
                    (
                        <>
                            <Field value={form.userName} name="userName" type="text" placeholder="Enter your login" label="login" onChange={e =>handleChange(e)} error={validationErrors.userName}/>
                            <Field value={form.password} name="password" type="password" placeholder="Enter your password" label="password" onChange={e =>handleChange(e)} error={validationErrors.password}/>
                            <input className="form__button form__button--submit" type="submit" value="login"/>
                        </>
                    )}
  
                {error && <Error message={error}></Error>}
                <StepContainer subpage={{subpage, setSubpage}}/>
            </StyledForm>
        </>
    )
}

export default LoginForm;
