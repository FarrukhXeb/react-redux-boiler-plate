import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/components/Header';
// import Footer from '../common/components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Header hasNavToggle={false} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
