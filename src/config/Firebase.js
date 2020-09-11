import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDQYQ__J2t41WpNeXNBZS_e898OQb-BvGs',
  authDomain: 'react-test-app-3d9f5.firebaseapp.com',
  databaseURL: 'https://react-test-app-3d9f5.firebaseio.com',
  projectId: 'react-test-app-3d9f5',
  storageBucket: 'react-test-app-3d9f5.appspot.com',
  messagingSenderId: '116139154327',
  appId: '1:116139154327:web:9792ea5b5a0b2ca3d802d2',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  /**
   * Auth API
   */
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
