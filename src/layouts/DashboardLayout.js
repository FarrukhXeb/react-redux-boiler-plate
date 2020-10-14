import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/components/Header';
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import Sidebar from '../common/components/Sidebar';
// import Footer from '../common/components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    appBar: {
      paddingLeft: 240,
    },
  },
  content: {
    padding: theme.spacing(3),
  },
}));

export default function DashboardLayout({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Header classes={classes.appBar} />
      <div className={classes.root}>
        {matches && <Sidebar />}
        <main className={classes.content}>{children}</main>
      </div>
      {/* <Footer/> */}
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
