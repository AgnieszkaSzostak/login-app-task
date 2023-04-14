import React from "react";
import '../App.css';
import StyledHeader from "./StyledHeader.styled";

const Header = (props) => {
    const {user} = props;
    return(
        <StyledHeader className="header">
            <nav className="navbar">
                <h1 className="header__title">Login <span>App</span></h1>
                {user 
                    ? <div className="navbar__user">Welcome {user}!</div>
                    : null
                }
            </nav>
        </StyledHeader>
    )
}
export default Header