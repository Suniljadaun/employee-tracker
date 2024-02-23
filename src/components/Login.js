// src/components/Login.js
import React, {useState} from 'react';
import authService from '../services/authService';
const Login = () => {
    const [username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const [LoginMessage,setLoginMessage] = useState('');
    const [LoginTime, setLoginTime]  = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await authService.login(username, password);
            setLoginMessage('Login successful');
            setLoginTime(response.data.logTime);
            onLoginSuccess();

            console.log(response.data);

        } catch (error) {
            setLoginMessage("Invalid username of password")
            if(error.response)
            setErrorMessage(error.response.data.message);
            else setErrorMessage('An unexpected error occurred');
        }

    };
    return(
        <div>
            <h2>Login</h2>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;