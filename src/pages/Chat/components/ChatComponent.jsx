import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import ChatBody from './ChatBody';

const useStyles = makeStyles(()=>({
  root:{
    height:'90vh'
  },
}));

function ChatComponent({ user, chat }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item lg={12} md={12} xl={12} sm={12}>
        <ChatBody chatWith={user} chat={chat}/>
      </Grid>
    </Grid>
  );
}

ChatComponent.propTypes ={
  user:PropTypes.object.isRequired,
  chat:PropTypes.object.isRequired,
};

export default ChatComponent;
