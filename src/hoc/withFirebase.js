import React from 'react';
import { FirebaseContext } from '../context/firebase';

export const FirebaseHoc = (Component) => {
  const MyComponent = (props) => 
    <FirebaseContext.Consumer>
      {(firebase) => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>;

  MyComponent.displayName='FirebaseHoc';
  return MyComponent;
};

