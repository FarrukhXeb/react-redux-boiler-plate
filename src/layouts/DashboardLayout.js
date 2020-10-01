import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/components/Header';
import { makeStyles } from '@material-ui/core';
import Sidebar from '../common/components/Sidebar';
// import Footer from '../common/components/Footer';

const useStyles = makeStyles((theme) => ({
  root:{
    display:'flex',
  },
  appBar:{
    paddingLeft:240
  },
  content:{
    padding:theme.spacing(3)
  }
}));

export default function DashboardLayout({ children }) {
  const classes = useStyles();

  return (
    <>
      <Header classes={classes.appBar}/>
      <div className={classes.root}>
        <Sidebar/>
        <main className={classes.content}>
          {children}
        </main>
      </div>
      {/* <Footer/> */}
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
