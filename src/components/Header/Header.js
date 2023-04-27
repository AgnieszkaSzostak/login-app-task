import React from "react";
import StyledHeader from "./StyledHeader.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const {user} = props;
    return(
        <StyledHeader className="header">
            <nav className="navbar">
                <h1 className="header__title">
                    <FontAwesomeIcon className="icon" icon={faSeedling} />Login <span>App</span></h1>
                {user 
                    ? <div className="navbar__user">Welcome {user}!</div>
                    : null
                }
            </nav>
          
        </StyledHeader>
    )
}
export default Header