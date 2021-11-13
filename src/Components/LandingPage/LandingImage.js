import React from 'react'
import landing from '../../Assets/landing.jpeg'
import './LandingImage.css';
import Box from '@mui/material/Box';
import {TextField,Button,Container} from '@mui/material';
import styled from '@emotion/styled';
import { fontFamily, fontSize } from '@mui/system';
import Logo from '../../Assets/logo.jpeg';
import FormDialog from '../Dialog/DialogForm';

const LandingImage = () => {
    return (
        <div>
{console.log("Inside Landing Page")}
        <Container  maxWidth="sm"> 
            <img src={landing} />
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 160, 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          fontFamily:'initial',
                          fontSize:'50px',
                          color:'white',
                          backgroundColor:'black'
                        }}>Best Native Matrimony Website for Best Life Partners</div>
        <div  
        className="Logo"
         style={{
                position: 'absolute', 
                color: 'white', 
                top: 50, 
                left: '50%', 
                transform: 'translateX(-50%)',
                width:'25%'
             }}
        >
        <br/> 
        <img src={Logo} 
        />
        </div>
        <div style={{position:'absolute',left:'45%',top:299}}>
        <FormDialog />
        </div>
        </Container>        
        </div>
    )
}

export default LandingImage
