import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, withStyles, createStyles, Badge, makeStyles } from '@material-ui/core';

const StyledBadgeActive = withStyles((theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const StyledBadgeInActive = withStyles((theme) =>
  createStyles({
    badge: {
      backgroundColor: '#efefef',
      color: '#efefef',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);

const useStyles = makeStyles(theme=>({
  avatar:{
    height:theme.spacing(8),
    width:theme.spacing(8)
  }
}));

function ChatAvatar({ isOnline }) {
  const classes = useStyles();

  return isOnline ?
    <StyledBadgeActive 
      overlap="circle"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      variant="dot">
      <Avatar className={classes.avatar} />
    </StyledBadgeActive> :
    <StyledBadgeInActive 
      overlap="circle"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      variant="dot">
      <Avatar className={classes.avatar} />
    </StyledBadgeInActive>;
}
ChatAvatar.propTypes = {
  isOnline:PropTypes.bool.isRequired
};
export default ChatAvatar;
