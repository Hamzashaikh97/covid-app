import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    marginTop: '50px',
    maxWidth: 1000,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{

    color:'blue',

  }


}));

export default function AllCountries({currentScreen}) {
  let [globaldata,setglobaldata]=useState([]);

  useEffect(()=>{

    async function callapi(){

      let response=await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort');
      
      let data =await response.json();  // beacuse json also return promise

      console.log(data[0]);

      setglobaldata(data);

    }
    callapi();


  },[])
  
  const classes = useStyles();


  return (
    <div className={classes.root}>
    <TableContainer component={Paper}>
   <Table className={classes.table} aria-label="simple table">
     <TableHead>
       <TableRow>
         <TableCell>Countries</TableCell>
         
         <TableCell align="right"> TodayCases</TableCell>
         <TableCell align="right"> TodayDeaths</TableCell>
         <TableCell align="right">TodayRecovered</TableCell>
         <TableCell align="right">Recovered</TableCell>
         <TableCell align="right">Active</TableCell>
         <TableCell align="right">Cases</TableCell>

       </TableRow>
     </TableHead>
     <TableBody>
       {globaldata.map((value,index) => (
         <TableRow key={index}>
           <TableCell component="th" scope="row">
             {value.country}
           </TableCell>
           <TableCell align="right">{value.todayCases}</TableCell>
           <TableCell align="right">{value.todayDeaths}</TableCell>
           <TableCell align="right">{value.todayRecovered}</TableCell>
           <TableCell align="right">{value.recovered}</TableCell>
           <TableCell align="right">{value.active}</TableCell>
           <TableCell align="right">{value.cases}</TableCell>
          
         </TableRow>
       ))}
     </TableBody>
   </Table>
 </TableContainer>
 </div>
  );
}
