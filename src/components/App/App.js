import StyledApp from './StyledApp';
import React, {useState} from 'react';
import LoginForm from '../Forms/LoginForm';
import Header from '../Header/Header';
import Panel from '../Panel/Panel';
import RegisterForm from '../Forms/RegisterForm';


const App = () => {
  const [fullUserName, setFullUserName] = useState('');
  const token = sessionStorage.getItem('token');
  const [form, setForm] = useState(<LoginForm setLoggedUser={setFullUserName} token={token}/>);
  
  return (
    <StyledApp className="App">
      <Header user={fullUserName}/>
      {form}
      <Panel changeForm={setForm}/>
    </StyledApp>
  );
}

export default App;

