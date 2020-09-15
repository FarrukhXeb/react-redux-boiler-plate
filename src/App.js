import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './routes/AppRoute';
// Containers
import HomeContainer from './pages/Home';
import AboutContainer from './pages/About';
// Layouts
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
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
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
