import React, { useContext } from 'react';
import {AppBar,Toolbar,Typography,TextField,Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import LandscapeIcon from '@mui/icons-material/Landscape';
import {context} from '../ContextApi/Context';

const Header = () => {

  const {myFunction}=useContext(context);

  return (
    <div>
      <AppBar sx={{backgroundColor:"black"}} position='sticky'>
        <Toolbar>
          <NavLink to='/' style={{color:"white",textDecoration:"none"}}>
            <Typography>
              <LandscapeIcon/>
            </Typography>
            <Typography>Gallery App</Typography>
          </NavLink>
          <TextField id='my-input' onKeyUp={()=>myFunction()} sx={{backgroundColor:"white",ml:"auto"}}   label="Search by name" variant="outlined" />
          <Button LinkComponent={NavLink} to='/addImage' sx={{ml:"auto", backgroundColor:"green"}} variant="contained">Add photo</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;