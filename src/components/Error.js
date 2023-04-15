import React from "react";
import StyledError from "./StyledError.styled";

const Error = (props) => {
    const {message, onClick} = props

    return (
        <StyledError onClick={onClick ? onClick : null} className="form__error">{message}</StyledError>
    )
}

export default Error