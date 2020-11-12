import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=>({
  mine:{
    backgroundColor:'#309f85'
  },
  notMine:{
    backgroundColor:'#ada5a5',
    marginLeft:'auto'
  },
  messageBody:{
    width:'400px',
    '& p':{
      color:'#fff'
    },
    padding:'16px',
    borderRadius:'20px',
    marginBottom:'30px'
  }
}));

function Message({ message, mine }) {
  const classes = useStyles();

  return (
    <div className={`${mine?classes.mine:classes.notMine} ${classes.messageBody}`}>
      <p>{message}</p>
    </div>
  );
}
Message.propTypes = {
  message:PropTypes.string.isRequired,
  mine:PropTypes.bool.isRequired
};
export default Message;
