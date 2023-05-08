import React from "react";
import StyledForm from "./StyledForm.styled";
import Field from "../Field/Field";
import { useState } from "react";

const RegisterForm = () => {
    const [form, setForm] = useState({
        email: '',  
        userName: '',
        password: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value 
        })
    }
    return(
        <StyledForm novalidate className="form" onSubmit={handleSubmit}>
            <Field value={form.email} name="email" type="email" placeholder="Enter your email" label="email" onChange={e =>handleChange(e)}></Field>
            <Field value={form.userName} name="userName" type="text" placeholder="Enter your login" label="login" onChange={e =>handleChange(e)}></Field>
            <Field value={form.password} name="password" type="password" placeholder="Enter your password" label="password" onChange={e =>handleChange(e)}></Field>
            <input className="form__button form__button--submit" type="submit" value="register"/>
        </StyledForm>
    )
}

export default RegisterForm