import React from 'react';
import { List } from '@material-ui/core';
import SingleUser from './SingleUser';
import { useContext } from 'react';
import { SocketContext } from '../../../../context/Socket';

function UsersOnlineList() {
  const context = useContext(SocketContext);

  return (
    <List>
      {
        context.users.map(user=><SingleUser key={user.id} user={user}/>)
      }
    </List>
  );
}

export default UsersOnlineList;
