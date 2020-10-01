import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Home from './components/HomeComponent';

export default class HomeContainer extends Component {
  state = {
    isLoggedIn: true,
  };
  render() {
    const { isLoggedIn } = this.state;

    if (!isLoggedIn) return <Redirect to={'/login'} />;
    return <Home />;
  }
}
