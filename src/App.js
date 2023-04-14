// import './App.css';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
const App = () => {

  const [fullUserName, setFullUserName] = useState('');
  return (
    <div className='App'>
      <Header user={fullUserName}/>
      <LoginForm setLoggedUser={setFullUserName}/>
    </div>
  );
}

export default App;
