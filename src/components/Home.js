import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



const Home = () => {
    var [value,setValue]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            setValue(value=response.data.users)
        })
    })
  return (
    <div>
        <br></br>
        
      <Typography variant='h5'>Welcome to Home Page</Typography>
      <br></br>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>CourseName</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
          </TableRow>
        </TableHead>
         <TableBody>
          {value.map((data,index)=>{(
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">{data.id}</StyledTableCell>
              <StyledTableCell align="right">{data.title}</StyledTableCell>
            </StyledTableRow>
          );
        </TableBody> 
     }
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home
