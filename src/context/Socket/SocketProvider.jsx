import React, { Component } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { SocketContext } from './index';
import { connect } from 'react-redux';
const socket = io(process.env.REACT_APP_API_BASE_URL);

class SocketProvider extends Component {
  state={
    users:[],
  }
  componentDidMount(){
    socket.connect();
    socket.emit('join', this.props.user);
    socket.on('joined', (users)=>{
      this.setState({ ...this.state, users });
    });
  }
  
  componentWillUnmount(){
    socket.disconnect();
  }
  
  render() {
    return (
      <SocketContext.Provider value={{ users:this.state.users }}>
        {this.props.children}
      </SocketContext.Provider>
    );
  }
}

SocketProvider.propTypes = {
  children:PropTypes.node.isRequired,
  user:PropTypes.object.isRequired
};

const mapStateToProps = (state)=>({
  user:state.auth.user
});

export default connect(mapStateToProps)(SocketProvider);
