import React from 'react';
import { List } from '@material-ui/core';
import SingleUser from './SingleUser';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { SocketContext } from '../../../../context/Socket';

function UsersOnlineList({ handleChatWith }) {
  const context = useContext(SocketContext);

  return (
    <List>
      {
        context.users.map(user=><SingleUser handleChatWith={handleChatWith} key={user.id} user={user}/>)
      }
    </List>
  );
}
UsersOnlineList.propTypes = {
  handleChatWith:PropTypes.func.isRequired
};
export default UsersOnlineList;
