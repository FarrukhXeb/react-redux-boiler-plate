import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/Socket';

export default function isOnline(id) {
  const [online, setOnline] = useState(false);

  const { users } = useContext(SocketContext);

  useEffect(()=>{
    if(users.some(user=>user.id===id))setOnline(true);
    else setOnline(false);
  }, [online, users]);

  return online;
}
