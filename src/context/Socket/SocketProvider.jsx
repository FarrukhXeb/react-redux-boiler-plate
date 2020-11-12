import React, { Component } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { SocketContext } from './index';
import { connect } from 'react-redux';
const socket = io(process.env.REACT_APP_API_BASE_URL);

class SocketProvider extends Component {
  state = {
    users: [],
    receivedMessage:null
  };
  componentDidMount() {
    socket.connect();
    socket.emit('join', this.props.user);
    socket.on('joined', (users) => {
      this.setState({ ...this.state, users });
    });
    socket.on('message', (message)=>this.setState({ ...this.state, receivedMessage:message }));
  }

  componentWillUnmount() {
    socket.disconnect();
  }

  emitMessage = (message) => {
    socket.emit('message', message);
  };

  render() {
    return (
      <SocketContext.Provider
        value={{
          users: this.state.users.filter(
            (user) => user.id !== this.props.user.id
          ),
          sendMessage: (message) => this.emitMessage(message),
          receivedMessage:this.state.receivedMessage
        }}
      >
        {this.props.children}
      </SocketContext.Provider>
    );
  }
}

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(SocketProvider);
