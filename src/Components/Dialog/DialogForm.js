import styled from '@emotion/styled';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {Link,DialogTitle} from '@mui/material';
import Forms from '../Forms/Forms';
import Buttonjs from '../Button/Button';
import './Dialog.css';
import {useHistory} from "react-router-dom";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDash = () => {
    history.push("/AdminDashboard")

  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Login/SignUp
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Welcome to Vivaham!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <Forms 
              id="outlined-multiline-flexible"
              label="Username"
              placeholder="Enter Username"
              multiline
          />
          <Forms 
              id="outlined-multiline-flexible"  
              label="Password"
              placeholder="Enter Password"
          />
        </DialogContent>
          <Button 
          onClick={handleDash}
          variant="contained"
          color="primary"
          style={{width:'20%',position:'absolute',left:115,top:'80%'}}
          
          >
          Login</Button>
        <DialogActions>
          <h4 style={{color:'gray'}}>New to Vivaham,</h4><Link style={{cursor:'pointer'}}>SignUp here ?</Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
