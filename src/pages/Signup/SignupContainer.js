import React, { Component } from 'react';
import SignupComponent from './components/SignupComponent';

export default class SignupContainer extends Component {
  render() {
    return (
      <div className={'signup-wrapper min-height-100'}>
        <div className={'signup-inner'}>
          <SignupComponent />
        </div>
      </div>
    );
  }
}
