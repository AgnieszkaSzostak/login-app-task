import StyledApp from './StyledApp';
import React, {useState} from 'react';
import LoginForm from '../Forms/LoginForm';
import Header from '../Header/Header';
import Panel from '../Panel/Panel';
import RegisterForm from '../Forms/RegisterForm';

const App = () => {
  const [registerPage, setRegisterPage] = useState(false);
  const [fullUserName, setFullUserName] = useState('');
  const token = sessionStorage.getItem('token');
  console.log(token);
  return (
    <StyledApp className="App">
      <Header user={fullUserName}/>
      {registerPage 
        ? <RegisterForm/> 
        : <LoginForm setLoggedUser={setFullUserName} token={token}/>
      }
      <Panel changeForm={setRegisterPage}/>
    </StyledApp>
  );
}

export default App;

