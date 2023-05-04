import "./navbar.css";
import { Typography } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div> 
      <div className='navbar'>
      <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          <Button color="inherit" variant='outlined'><Link className='linkstyle' to={"/"}>Home</Link></Button> &nbsp;&nbsp;
          <Button color="inherit" variant='outlined'><Link className='linkstyle' to={"/addemp"}>Add Employee</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    </div>
  )
}

export default Navbar
