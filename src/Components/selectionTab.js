import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

    const useStyles = makeStyles({
        root: {
          flexGrow: 1,
          maxWidth:450,
          margin:"0 auto",
          marginTop:'20px',
        },
      });
      

export default function SelectionTab(props) {
    
    const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.screenConfig[1](newValue)
    console.log(newValue)
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
        
      >
        <Tab label="GLOBAL STATS" />
        <Tab label="COUNTRIES" />
        <Tab label="GRAPHS" />
      </Tabs>
    </Paper>
  );
}
