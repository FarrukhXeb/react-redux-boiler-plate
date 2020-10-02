import React from 'react';
import PropTypes from 'prop-types';
import AppRoute from './AppRoute';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
function ProtectedRoute({
  component: Component,
  layout: Layout,
  isAuthenticated,
  ...rest
}) {
  return isAuthenticated ? 
    <AppRoute layout={Layout} component={Component} {...rest} />
    :
    <Redirect to={'/login'} />
  ;
}
ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
  isAuthenticated:PropTypes.bool.isRequired
};

const mapStateToProps = (state)=>({
  isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ProtectedRoute);
