import React from 'react';
import PropTypes from 'prop-types';
export default function NoHeaderFooterLayout({ children }) {
  return <main className={'min-height-100 pl-0'}>{children}</main>;
}
NoHeaderFooterLayout.propTypes = {
  children: PropTypes.elementType,
};
