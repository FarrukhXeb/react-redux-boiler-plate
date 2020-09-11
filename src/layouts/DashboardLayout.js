import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/components/Header';
import Sidebar from '../common/components/Sidebar';
import Footer from '../common/components/Footer';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Header/>
      <div className={'content-with-sidebar'}>
        <Sidebar/>
        <main>
          {children}
        </main>
      </div>
      <Footer/>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
