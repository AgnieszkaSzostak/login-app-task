import React, {useEffect, useState} from "react";
import { loginApi, authUserApi } from "../api";

const LoginForm = () => {
    const [subpage, setSubpage] = useState(1);
    const [isLogged, setIsLogged] = useState(false);
    const [fullUserName, setFullUserName] = useState('')
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        email: '',  
        userName: '',
        password: '',
    })
    useEffect(() => {
        if(isLogged){
            const token = sessionStorage.getItem("token");
            console.log('your token is', token)
            fetch(authUserApi, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': token
                }
            })
            .then(resp => resp.json())
            .then(resp => setFullUserName(resp.fullUserName))
        }
    }, [isLogged])
    const handleClick = (e) => {
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
       
        const options = { 
            method: 'POST', 
            body: JSON.stringify(form),
            headers: {"Content-Type": "application/json"}
        }

        fetch(loginApi, options)
            .then(res =>{
                if(!res.ok){
                    console.log('res', res);
                    throw Error(res.statusText)
                }
                 return res.json()
            })
            .then(data => {
                sessionStorage.setItem("token", data.token)
            })
            .then(resp => setIsLogged(true))
            .catch(err => {
                if(err.message === "Bad Request"){
                    setError("Wrong data")
                }else if(err.message === "Unauthorized"){
                    setError("Wrong credentials")
                }
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {subpage === 1 
                    ? 
                    (
                        <>  
                            <label>email</label>
                            <input value={form.email} type="email" name="email" onChange={(e) => handleChange(e)}></input>
                            <button onClick={handleClick}>Next</button>
                        </>
                    )
                    :
                    (
                        <>
                            <label>login</label>
                            <input value={form.userName} type="text" name="userName" onChange={(e) => handleChange(e)}></input>
                            <label>password</label>
                            <input value={form.password} type="password" name="password" onChange={(e) => handleChange(e)}></input>
                            <input type="submit" value="login"/>
                        </>
                    )}
            </form>
            {isLogged && fullUserName.length > 0 && <p>Hi {fullUserName}</p>}
            {error && <p>{error}</p>}
        </>
    )
}

export default LoginForm;