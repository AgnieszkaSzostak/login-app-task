import React from "react";
import StyledPanel from "./StyledPanel";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import Button from "../Button/Button";
import { useState } from "react";
import { panels } from "../../helpers/panels";

const Panel = (props) => {
  const {changeForm} = props; 
  const [state, setState] = useState('register');
  const handleClick = (e) => {
    if(state === 'register') {
      setState('login') 
      changeForm(<RegisterForm/>);
    }else{
      setState('register')
      changeForm(<LoginForm/>)
    }
  }
  const {title, description, button} = panels[state]
    return (
        <StyledPanel className="panel">
              <div className="panel__content--overlay">
                <h1 className="panel__title">{title}</h1>
                <p className="panel__description">{description}</p>
                <Button onClick={handleClick}>{button}</Button>
              </div>
        </StyledPanel>
    )
}

export default Panel