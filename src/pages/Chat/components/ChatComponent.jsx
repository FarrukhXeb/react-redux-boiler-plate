import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ChatSideBar from './ChatSideBar';
import ChatBody from './ChatBody';

const useStyles = makeStyles(()=>({
  root:{
    height:'90vh'
  },
}));

export default function ChatComponent() {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item lg={3} md={3} xl={3} sm={3}>
        <ChatSideBar/>
      </Grid>
      <Grid item lg={9} md={9} xl={9} sm={9}>
        <ChatBody/>
      </Grid>
    </Grid>
  );
}
