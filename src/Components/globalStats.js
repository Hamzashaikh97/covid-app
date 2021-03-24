import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';

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

export default function GlobalStats({currentScreen}) {
  console.log(currentScreen)
  const classes = useStyles();
  const [globalData, setglobalData] = useState({currentScreen})

  useEffect(() => {

    async function CallApi() {

      let reponse = await fetch('https://corona.lmao.ninja/v2/all?yesterday')
      let data = await reponse.json()

      setglobalData(data)
      console.log(data)

    }
    CallApi();

  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalData).map((key,ind) => {
          return (
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} elevation={3}>
                
                
                <h3 className={classes.title}>{key.toUpperCase()}</h3>
                <h3>{globalData[key]}</h3>
                
                </Paper>
            </Grid>


          )
        })}
      </Grid>
    </div>
  );
}
