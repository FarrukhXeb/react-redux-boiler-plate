import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function AppRoute({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => 
        <Layout>
          <Component {...props} />
        </Layout>
      }
    />
  );
}
AppRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
};
