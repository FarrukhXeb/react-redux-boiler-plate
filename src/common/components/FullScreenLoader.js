import React from 'react';
import PropTypes from 'prop-types';
import {
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  circularProgress: {
    padding: theme.spacing(3),
    minHeight: '84vh',
  },
  message:{
    marginTop:theme.spacing(2)
  }
}));

function FullScreenLoader({ message }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction={'column'}
      alignItems={'center'}
      justify={'center'}
      className={classes.circularProgress}
    >
      <CircularProgress />
      {message && <Typography className={classes.message} variant={'body1'}>{message}</Typography>}
    </Grid>
  );
}
FullScreenLoader.propTypes = {
  message: PropTypes.string,
};
export default FullScreenLoader;
