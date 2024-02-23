// Dashboard.js

import React, {useState, useEffect} from 'react';
import authServices from '../services/authService';

const Dashboard = ()=> {
    const [presenceData, setPresenceData] = useState([]);

    useEffect(() =>{
        const fetchPresenceData = async()=> {
            try {
                const response = await authServices.getPresenceData();
                setPresenceData(response.data);
            } catch(error){
                console.error(error);
            }
        };
        fetchPresenceData();
    }, []);

    return (
        <div>
            <h2>Employee Presence Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Login Time</th>
                        <th>Logout Time</th>
                    </tr>
                </thead>
                <tbody>
                    {presenceData.map((entry) =>(
                        <tr key={entry._id}>
                            <td>{entry.username}</td>
                            <td>{entry.loginTime}</td>
                            <td>{entry.logoutTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default Dashboard;