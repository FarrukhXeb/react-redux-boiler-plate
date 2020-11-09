import React from 'react';
import { Paper, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root:{
    height:'100%',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function ChatBody() {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant={'h6'}>Chat Body</Typography>
    </Paper>
  );
}
