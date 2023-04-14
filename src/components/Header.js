import React from "react";
import '../App.css';
import StyledHeader from "./StyledHeader.styled";

const Header = (props) => {
    const {user} = props;
    return(
        <StyledHeader>
            <h1>Login App</h1>
            <nav className="navbar">
            <div>{user}</div>
            </nav>
        </StyledHeader>
    )
}
export default Header