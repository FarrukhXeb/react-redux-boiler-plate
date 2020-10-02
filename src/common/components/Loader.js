import React from 'react';
import { CircularProgress, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  circularProgress:{
    padding:theme.spacing(3)
  }
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <Grid container justify={'center'} className={classes.circularProgress}>
      <CircularProgress />
    </Grid>
  );
}
