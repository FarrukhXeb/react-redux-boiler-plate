import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './routes/AppRoute';
// Containers
import HomeContainer from './pages/Home';
import AboutContainer from './pages/About';
import LoginContainer from './pages/Login';
import SignupContainer from './pages/Signup';
// Layouts
import MainLayout from './layouts/MainLayout';
import NoHeaderFooterLayout from './layouts/NoHeaderFooterLayout';
import DashboardLayout from './layouts/DashboardLayout';
// HOC
import withAuthentication from './hoc/withAuthentication';
class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <AppRoute
            component={HomeContainer}
            layout={DashboardLayout}
            path={'/'}
            exact
          />
          <AppRoute
            component={AboutContainer}
            layout={MainLayout}
            path={'/about'}
          />
          <AppRoute
            component={LoginContainer}
            layout={NoHeaderFooterLayout}
            path={'/login'}
          />
          <AppRoute
            component={SignupContainer}
            layout={NoHeaderFooterLayout}
            path={'/signup'}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default withAuthentication(App);
