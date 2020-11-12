import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, makeStyles, Input, InputAdornment, IconButton, Typography } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import useIsOnline from '../../../hooks/useIsOnline';
import ChatAvatar from '../../../common/components/ChatAvatar';
import firstLetterCapital from '../../../utils/firstLetterCapital';
import Message from './Message';
import { SocketContext } from '../../../context/Socket';
import http from '../../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
  },
  messagesBody: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column-reverse',
    padding:'40px'
  },
  header:{
    padding:'20px',
    borderBottom:`1px solid ${theme.palette.primary.dark}`,
    display:'flex',
    alignItems:'center'
  }
}));


function ChatBody({ chatWith, chat }) {
  const classes = useStyles();
  const isOnline = useIsOnline(chatWith.id);
  const [message, setMessage] = useState('');
  const socketContext = useContext(SocketContext);
  const [messages, setMessages] = useState(chat.messages);
  const { receivedMessage } = socketContext;

  useEffect(()=>{
    if(receivedMessage)
      setMessages([...messages, receivedMessage]);
  }, [ messages, receivedMessage ]);
  console.log(messages);
  const sendMessage = async ()=>{
    if(message!==''){
      const res = await http.post('/message', { chatId:chat.id, content:message });

      if(res.success){
        socketContext.sendMessage(res.data);
        setMessage('');
      }
    }
  };

  return (
    <Paper className={classes.root} elevation={4}>
      <header className={classes.header}>
        <ChatAvatar isOnline={isOnline}/>
        <Typography style={{ marginLeft:'16px', fontWeight:'bold', color:'#000' }} variant={'body1'}>
          {firstLetterCapital(chatWith.firstName)} {firstLetterCapital(chatWith.lastName)}
        </Typography>
      </header>
      <div className={classes.messagesBody}>
        {
          messages.map(message=>{
            if(message.from.id===chatWith.id)
              return (
                <Message key={message.id} message={message.content} mine={false}/>      
              );
            else return <Message key={message.id} message={message.content} mine={true}/>;      
          })
        }
      </div>
      <Input
        className={classes.input}
        fullWidth
        value={message}
        onChange={e=>setMessage(e.target.value)}
        placeholder={'Enter your message...'}
        type={'text'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={sendMessage}>
              <Send />
            </IconButton>
          </InputAdornment>
        }
      />
    </Paper>
  );
}

ChatBody.propTypes = {
  chatWith: PropTypes.object,
  chat:PropTypes.object.isRequired
};

export default ChatBody;
