import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

const Dashboard = () => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >
           Blog Dashboard
          </Typography>
          <Button  variant='contained' className='one' color='inherit'><Link to={'/'}>Home</Link></Button>
          <Button  variant='contained' className='two' color='inherit'><Link to={'/blog'}>Add Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

      
    </div>
  )
}

export default Dashboard
