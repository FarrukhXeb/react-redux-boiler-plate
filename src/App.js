import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './common/components/Header';
import HomeContainer from './pages/Home';
import AboutContainer from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={HomeContainer} path={'/'} exact />
        <Route component={AboutContainer} path={'/about'} exact />
      </Switch>
    </BrowserRouter>
  );
}
