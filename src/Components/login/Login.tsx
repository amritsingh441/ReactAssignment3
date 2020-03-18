import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { FormControl, TextField, Button } from '@material-ui/core';
import User from '../../model/User';
import {LoginService} from '../../service/LoginService';
const useStyles = makeStyles(() => 
createStyles({
    root:{
        marginTop:80,
        textAlign:'center'
    }
}))


const Login = (porps:any) =>{
    const classes = useStyles();
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState('');

    const handleOnChange = (event:any) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if(name === "username")
            setUserName(value)
        else
            setPassword(value)
    }
    
    const handleOnClick = () => {
        const user = new User(username,password);
        const auth = LoginService(user);
        auth.then((data) => {
            porps.updateToken(data.token);
        })
    }
    return <div className = {classes.root}>
        <FormControl>
            <TextField placeholder = "User Name"
                        value = {username}
                        name = "username"
                        onChange = {handleOnChange}
                        required></TextField>
            <TextField placeholder = "Password"
                        type = "password"
                        value = {password}
                        name = "password"
                        onChange = {handleOnChange}
                        required></TextField>
            <Button onClick = {handleOnClick}>Login</Button>
        </FormControl>
    </div>
}

export default Login;