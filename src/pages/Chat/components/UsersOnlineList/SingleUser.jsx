import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

function SingleUser({ user }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText primary={`${user.firstName} ${user.lastName}`} />
    </ListItem>
  );
}

SingleUser.propTypes = {
  user:PropTypes.object
};

export default SingleUser;
