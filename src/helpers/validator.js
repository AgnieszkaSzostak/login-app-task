import { fields } from "./fields";

export const validateForm = (form) => {
    let errors = [];
    fields.forEach(field => {
        const {label, name, required, pattern, error} = field;
        const value = form[name];
        if(required){
            if(value.length === 0){
                const error = `${label} is required!`
                errors = [...errors, `${error}`]
            } 
        }else if(pattern){
            const reg = new RegExp(pattern)
            if(!reg.test(value)){
                errors = [...errors, `${error}`]
            }
        }
    })
    return errors
}