import React from 'react'
import {TextField,Button} from '@mui/material';
import styled from '@emotion/styled';


const Buttonjs = ({text,onClick,color,style}) => {
    return (
        <React.Fragment>
            <Button 
            onClick={onClick}
            variant="contained"
            color={color}
            style={style}
            >
                {text}
            </Button>
        </React.Fragment>
    )
}

{/* <Button onClick={onClick} variant="contained" color="primary">Submit</Button> */}
export default Buttonjs