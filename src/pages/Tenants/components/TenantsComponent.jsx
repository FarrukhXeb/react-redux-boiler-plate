import React from 'react';
import { Grid } from '@material-ui/core';
import ListingsTable from '../../../common/components/ListingsTable';

export default function TenantsComponent() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ListingsTable />
      </Grid>
    </Grid>
  );
}
