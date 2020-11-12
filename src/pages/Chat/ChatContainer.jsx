import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatComponent from './components/ChatComponent';
import http from '../../services/api';
import FullScreenLoader from '../../common/components/FullScreenLoader';
import { Redirect } from 'react-router-dom';


class ChatContainer extends Component {
  state={
    loading: true,
    user: null,
    chat:null
  }
  
  async componentDidMount(){
    const { fullName } = this.props.match.params;
    const { user } = await http.get(`/user/name/${fullName}`);

    
    /**
     * If there is a user whom we want to communicate with is in the database
     * the authenticated user will initiate a chat and the chat will be created 
     * in the database
     */
    const { chat } = await http.get(`/chat/with/${user.id}`);

    this.setState({ ...this.state, user, loading:false, chat });
  }

  render() {
    const { loading, user, chat } = this.state;

    if(loading) return <FullScreenLoader message={'Getting user'}/>;

    if(!user) return <Redirect to={'/'}/>;

    return <ChatComponent user={user} chat={chat}/>;
  }
}

ChatContainer.propTypes = {
  match:PropTypes.object.isRequired
};

export default ChatContainer;
