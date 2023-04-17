import { fields } from "./fields";

export const validateForm = (form) => {
    let errors = {
        email: '',
        userName: '',
        password: '',
    };
    fields.forEach(field => {
        const {label, name, required, pattern, error} = field;
        const value = form[name];
        if(required){
            if(value.length === 0){
                const error = `${label} is required!`
                errors = {...errors, [name]:`${error}`}
            } 
        }else if(pattern){
            const reg = new RegExp(pattern)
            if(!reg.test(value)){
                errors = {...errors, [name]:`${error}`}
            }
        }
    })
    return errors
}