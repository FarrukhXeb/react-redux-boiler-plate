import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpComponent from './components/SignUpComponent';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
class SignUpContainer extends Component {
  render() {
    const { isAuthenticated } =this.props;

    if (isAuthenticated) return <Redirect to={'/'} />;

    return (
      <div>
        <SignUpComponent/> 
      </div>
    );
  }
}
SignUpContainer.propTypes ={
  isAuthenticated:PropTypes.bool.isRequired
};
const mapStateToProps = (state)=>({
  isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps)(SignUpContainer);
