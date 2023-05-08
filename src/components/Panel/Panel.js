import React from "react";
import StyledPanel from "./StyledPanel";
import background from '../../assets/images/background.jpg'

const Panel = (props) => {
  const {changeForm} = props; 
  const handleClick = () => {
    changeForm(true);
  }
    return (
        <StyledPanel className="panel">
              <div className="panel__content--overlay">
                <h1 className="panel__title">Join our community!</h1>
                <p className="panel__description">Register now and discover all the features of our app.</p>
                <button onClick={handleClick}>Register</button>
              </div>

        </StyledPanel>
    )
}

export default Panel