import React, { useRef} from "react";
import Error from "../Error/Error";
import StyledField from "./StyledField.styled";

const Field = props => {
    const {value, type, label, onChange, error, name, placeholder} = props
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.focus();   
    };

    return(
        <StyledField onClick={handleClick} className={`form__field ${value.length > 0 ? "hide" : ""}`}>
            <label className="form__label">{label}</label>
            <input ref={inputRef} placeholder={placeholder} className="form__input" value={value} type={type} name={name} onChange={onChange}/>
            {error.length > 0 ? <Error message={error}/> : null}
        </StyledField>
    )
}

export default Field