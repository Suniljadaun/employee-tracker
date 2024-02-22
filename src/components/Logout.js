// src/components/Logout.js

import React from 'react';
import authService from '../services/authService';

const Logout = ()=>{
    const handleLogout = async()=>{
        try {
            await authService.logout();

        } catch(error){
            console.error(error);
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