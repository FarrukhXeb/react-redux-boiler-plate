import React from 'react';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { BookmarkOutlined, HomeOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
const drawerWidth = 240;

const useStyles = makeStyles((theme)=>({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader:{
    ...theme.mixins.toolbar,
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.drawerHeader} />
      <Divider />
      <List>
        <ListItem button component={Link} to={'/'}>
          <ListItemIcon><HomeOutlined/></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to={'/about'}>
          <ListItemIcon><BookmarkOutlined/></ListItemIcon>
          <ListItemText primary={'About'} />
        </ListItem>
      </List>
    </Drawer>
     
  );
}
