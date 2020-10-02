import React from 'react';
import PropTypes from 'prop-types';
export default function NoHeaderFooterLayout({ children }) {
  return <main className={'min-height-100 pt-1 pl-1'}>{children}</main>;
}
NoHeaderFooterLayout.propTypes = {
  children: PropTypes.object.isRequired,
};
