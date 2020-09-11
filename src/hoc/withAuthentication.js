import React from 'react';
import PropTypes from 'prop-types';
import { FirebaseHoc } from './withFirebase';
import { AuthUserContext } from '../context/session';
const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        authUser: null,
      };
    }
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        (authUser) => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <AuthUserContext.Consumer>
            {(authUser) => <Component {...this.props} authUser={authUser} />}
          </AuthUserContext.Consumer>
        </AuthUserContext.Provider>
      );
    }
  }

  WithAuthentication.propTypes = {
    firebase: PropTypes.object.isRequired,
  };

  return FirebaseHoc(WithAuthentication);
};

export default withAuthentication;
