import { useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import ResponsiveListingsTable from './ResponsiveListingsTable';
import DesktopListingsTable from './DesktopListingsTable';
export default function ListingsTable() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  return small ? <ResponsiveListingsTable/> : <DesktopListingsTable/>;
}
