import React, {useState} from 'react';
import Login from './Login';
import Logout from './Logout';


import logo from '../logo.svg';
import '../App.css';

const App = ()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = ()=>{
    setIsLoggedIn(true);
  };

  const handleLogoutSuccess = ()=>{
    setIsLoggedIn(false);
  };
  
  return (
    <div>
      <h1>Employee Presenc Tracker </h1>
      {isLoggedIn ?<Logout onLogoutSuccess={handleLogoutSuccess}/>:<Login onLoginSuccess={handleLoginSuccess}/>}
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
