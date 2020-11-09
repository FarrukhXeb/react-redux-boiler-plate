import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/components/Header';
import SocketProvider from '../context/Socket/SocketProvider';
// import Footer from '../common/components/Footer';

export default function MainLayout({ children }) {
  return (
    <SocketProvider>
      <Header hasNavToggle={false} />
      <main>{children}</main>
      {/* <Footer /> */}
    </SocketProvider>
  );
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
