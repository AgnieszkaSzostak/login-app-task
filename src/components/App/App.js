import StyledApp from './StyledApp';
import React, {useState} from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../Header/Header';
import Panel from '../Panel/Panel';

const App = () => {
  const [fullUserName, setFullUserName] = useState('');
  const token = sessionStorage.getItem('token');
  console.log(token);
  return (
    <StyledApp className="App">
      <Header user={fullUserName}/>
      <LoginForm setLoggedUser={setFullUserName} token={token}/>
      <Panel/>
    </StyledApp>
  );
}

export default App;

