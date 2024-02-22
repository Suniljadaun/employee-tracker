const express = require('express');
const bodyParser = require('body-parser');
const authService = require('./src/services/authService');
const bcrypt = require('bcrypt');
const Presence = require('./src/models/Presence');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// const users = [
//     {id: 1, username:'user1', password: 'password1'},
//     {id: 2, username:'user2', password:'password2'}
// ];

app.post('/login',async (req,res)=>{
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({message:'Username and password are required.'});
    }
    try {
        const user = await authService.login(username,password);

        const loginTime = new Date();
        console.log(`User ${user.username} logged in at ${loginTime}`);
        await Presence.create({userId:user.id, loginTime});
        
        res.status(200).json({message:'Login successful.',user});
    } catch (error) {
        console.error(`Login error:`,error.message);
        return res.status(401).json({message:'Invalid username or password.'});
    }

});

app.post('/logout', async(req,res)=>{
    console.log(`User logged out at ${new Date()}`);
    res.status(200).json({message: 'Logout successful.'});

    // res.send('Logout route');
});

app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));