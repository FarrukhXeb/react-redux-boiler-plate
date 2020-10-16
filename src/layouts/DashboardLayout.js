import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../common/components/Header';
import { makeStyles, useTheme, useMediaQuery, Drawer } from '@material-ui/core';
import Sidebar from '../common/components/Sidebar';
import { withRouter } from 'react-router-dom';
// import Footer from '../common/components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: 240,
    },
    '& .MuiToolbar-root': {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
  },
  content: {
    padding: theme.spacing(3),
  },
}));

function DashboardLayout({ children, history }) {
  const [drawer, toggleDrawer] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    history.listen(() => {
      if (drawer) toggleDrawer(false);
    });
    () => history.unlisten();
  });

  return (
    <>
      <Header
        hasNavToggle={true}
        classes={classes.appBar}
        toggleDrawer={() => toggleDrawer(true)}
      />
      <div className={classes.root}>
        {matches && <Sidebar />}
        {!matches && 
          <Drawer open={drawer} onClose={() => toggleDrawer(false)}>
            <Sidebar />
          </Drawer>
        }
        <main className={classes.content}>{children}</main>
      </div>
      {/* <Footer/> */}
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(DashboardLayout);
