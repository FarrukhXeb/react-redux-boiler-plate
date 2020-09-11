import React from 'react';
import SignupForm from './SignupForm';

export default function SignupComponent() {
  return (
    <div className={'card'}>
      <div className={'card-heading'}>
        <h4>Sign Up</h4>
      </div>
      <div className={'card-content'}>
        <SignupForm />
      </div>
    </div>
  );
}
