import React from 'react'
import Buttonjs from '../Components/Button/Button'
import Forms from '../Components/Forms/Forms'
import './Login.css';
import Logo from '../Assets/logo.jpeg';

const Login = () => {
    return (
        <div className="Login">
            <Forms 
                label="Enter Username"
            />
            <Forms 
                label="Enter Password"
            />
            <br/>
            <Buttonjs
                text="Login"
            />
        </div>
    )
}

export default Login