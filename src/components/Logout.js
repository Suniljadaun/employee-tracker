// src/components/Logout.js

import React from 'react';
import authService from '../services/authService';

const Logout = ({onLogoutSuccess})=>{
    const [logoutMessage, setLogoutMessage] = useState('');
    const [logoutTime, setLogoutTime] = useState('');
    const handleLogout = async()=>{
        try {
            await authService.logout();
            setLogoutMessage('Logout successful');
            setLogoutTime(new Date());
            onLogoutSuccess();

        } catch(error){
            console.error(error);
            setLogoutMessage('Error logging out');
        }
    };

    return(
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;