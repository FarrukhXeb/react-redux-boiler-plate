import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './routes/AppRoute';
// Containers
import HomeContainer from './pages/Home';
import AboutContainer from './pages/About';
import LoginContainer from './pages/Login';
import ProfileContainer from './pages/Profile/ProfileContainer';
import PageNotFound from './pages/PageNotFound';
// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import NoHeaderFooterLayout from './layouts/NoHeaderFooterLayout';
import { CssBaseline } from '@material-ui/core';
import SignUpContainer from './pages/SignUp';
import ProtectedRoute from './routes/ProtectedRoute';
import { connect } from 'react-redux';
import { getLoginStatus } from './redux/Auth/actions';
import FullScreenLoader from './common/components/FullScreenLoader';
class App extends React.Component {

  componentDidMount(){
    this.props.getLoginStatus();
  }

  render() {
    const { checkingAuth } =this.props;

    if(checkingAuth) return <FullScreenLoader message={'Authenticating...'}/>;

    return (
      <CssBaseline>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute
              component={HomeContainer}
              layout={DashboardLayout}
              path={'/'}
              exact
            />
            <ProtectedRoute
              component={AboutContainer}
              layout={DashboardLayout}
              path={'/about'}
            />
            <ProtectedRoute
              component={ProfileContainer}
              layout={DashboardLayout}
              path={'/profile'}
            />
            <AppRoute
              component={LoginContainer}
              layout={NoHeaderFooterLayout}
              path={'/login'}
            />
            <AppRoute
              component={SignUpContainer}
              layout={NoHeaderFooterLayout}
              path={'/signup'}
            />
            <AppRoute
              component={PageNotFound}
              layout={MainLayout}
              path={'*'}
            />
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    );
  }
}

App.propTypes = {
  checkingAuth:PropTypes.bool.isRequired,
  getLoginStatus:PropTypes.func.isRequired
};


const mapStateToProps = (state)=>({
  checkingAuth:state.auth.checkingAuth
});

const mapDispatchToProps = (dispatch)=>({
  getLoginStatus:()=>dispatch(getLoginStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
