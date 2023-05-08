import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
const Addblog = () => {
  return (
    <div>
        <br></br><br></br><br></br>
       <Typography variant='h4'>Add Info</Typography>
      <br></br><br></br><br></br>
      <TextField  variant='outlined' label='ID' fullWidth ></TextField>
      <br></br><br></br>
      <TextField variant='outlined' label='Title' fullWidth></TextField>
      <br></br><br></br>
      <Button variant='contained' color='secondary' fullWidth>Submit</Button>
    </div>
  )
}

export default Addblog
