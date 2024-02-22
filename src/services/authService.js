import axios from 'axios';
const fs = require('fs');
const path = require('path');
const bccrypt = require('bcrypt');
const usersFilePath = path.join(__dirname, '../Data/users.json');

const   API_URL = 'http://localhost:5000';

const authService = {
    login: async (username,password)=>{
        try{

            // return await axios.post('${API_URL}/login',{username,password});
            const userData = JSON.parse(fs.readFileSync(usersFilePath,'utf-8'));

            const user = userData.find(user=> user.username === username);
            if(!user) {
                throw new Error('user not found');
            }

            const isPasswordValid = await  bccrypt.compare(password,user.password);
            if(!isPasswordValid){
                throw new Error('Invalid Password');
            }
            return user;
        } catch(error) {
            throw error;
        }
    },
    logout: async()=>{
        try {
            return await axios.post('${API_URL}/logout');
        } catch(error) {
            throw error;
        }
    }
};

export default   authService;