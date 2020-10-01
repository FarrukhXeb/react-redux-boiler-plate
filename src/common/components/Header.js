import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 'bold',
    color:theme.palette.primary.dark,
  },
}));

export default function Header({ position, classes: className }) {
  const classes = useStyles();

  return (
    <AppBar
      position={position ? position : 'static'}
      className={className}
      classes={{
        root:classes.appBar
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to={'/'}
          className={classes.title}
        >
          React App Practice
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
Header.propTypes = {
  position: PropTypes.string,
  classes: PropTypes.string,
};
