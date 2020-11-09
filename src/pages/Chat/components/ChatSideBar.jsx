import React from 'react';
import UsersOnlineList from './UsersOnlineList';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root:{
    height:'100%',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function ChatSideBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={4}>
      <UsersOnlineList/>
    </Paper>
  );
}
