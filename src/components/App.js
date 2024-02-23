// App.js 

import React, {useState} from 'react';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';


import logo from '../logo.svg';
import '../App.css';


const App = ()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginTime, setLoginTime] = useState('');
  const [logoutTime, setLogoutTime] = useState('');
  const [logoutMessage, setLogoutMessage] = useState('');
  const handleLoginSuccess = (time)=>{
    setIsLoggedIn(true);
    setLoginTime(time);
  };

  const handleLogoutSuccess = (time,message)=>{
    setIsLoggedIn(false);
    setLogoutTime(time);
    setLogoutMessage(message);
  };
  
  return (
    <div>
      <h1>Employee Presence Tracker </h1>
      {/* {/* {/* {isLoggedIn ? ( */}
        <Dashboard
        loginTime={loginTime}
        logoutTime={logoutTime}
        logoutMessage={logoutMessage}
        /> 
      
      {isLoggedIn ?(<Logout onLogoutSuccess={handleLogoutSuccess}/>):(<Login onLoginSuccess={handleLoginSuccess}/>)}
    </div>
  );
};



export default App;
