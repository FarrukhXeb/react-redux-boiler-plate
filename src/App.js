import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './routes/AppRoute';
// Containers
import HomeContainer from './pages/Home';
import AboutContainer from './pages/About';
import LoginContainer from './pages/Login';
// Layouts
// import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import NoHeaderFooterLayout from './layouts/NoHeaderFooterLayout';
import { CssBaseline } from '@material-ui/core';
import SignUpContainer from './pages/SignUp';
class App extends React.Component {
  render(){
    return (
      <CssBaseline>
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
              layout={DashboardLayout}
              path={'/about'}
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
          </Switch>
        </BrowserRouter>
      </CssBaseline>
    );
  }
}
export default App;
