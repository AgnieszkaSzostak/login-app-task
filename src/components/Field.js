import React, { useRef, useState } from "react";
import Error from "./Error";
const Field = props => {
    const {value, type, label, onChange, error, name} = props
    const inputRef = useRef(null);
    const [display, setDisplay] = useState(true)
    const handleClick = () => {
        inputRef.current.focus();
        setDisplay(false)
    };

    return(
        <div onClick={()=> inputRef.current.focus()} className={`form__field ${value.length > 0 ? "hide" : ""}`}>
                                <label className="form__label">{label}</label>
                                <input ref={inputRef} className="form__input" value={value} type={type} name={name} onChange={onChange}></input>
                                { display && error ? <Error onClick={handleClick} message={error}/> : null}
                            </div>
    )
}

export default Field