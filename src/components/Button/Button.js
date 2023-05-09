import React from "react";
import StyledButton from "./StyledButton.styled";
const Button = props => {
    const {children, onClick} = props
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}

export default Button