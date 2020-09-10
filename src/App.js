import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeContainer from './pages/Home';
import AboutContainer from './pages/About';
import AppRoute from './routes/AppRoute';
import MainLayout from './layouts/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute
          component={HomeContainer}
          layout={MainLayout}
          path={'/'}
          exact
        />
        <AppRoute
          component={AboutContainer}
          layout={MainLayout}
          path={'/about'}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}
