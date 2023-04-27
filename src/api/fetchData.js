import { loginApi } from "."
import { authUserApi } from "."

export const logIn = (form) => {
    const options = { 
        method: 'POST', 
        body: JSON.stringify(form),
        headers: {"Content-Type": "application/json"}
    }

    return _fetch(loginApi, options)

}

export const authorize = (token = sessionStorage.getItem("token") ) => {
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': token
        }
    }
     return _fetch(authUserApi, options)
}

const _fetch = (url, options) => {
    return fetch(url, options)
        .then(res =>{
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        }) 
} 