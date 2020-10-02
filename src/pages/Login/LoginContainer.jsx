import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class LoginContainer extends Component {
  render() {
    const { isAuthenticated } =this.props;

    if (isAuthenticated) return <Redirect to={'/'} />;

    return (
      <div>
        <LoginComponent/>
      </div>
    );
  }
}
LoginContainer.propTypes ={
  isAuthenticated:PropTypes.bool.isRequired
};
const mapStateToProps = (state)=>({
  isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LoginContainer);
