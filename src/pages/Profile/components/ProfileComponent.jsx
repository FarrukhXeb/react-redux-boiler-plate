import { Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import ProfileHeader from './ProfileHeader';

function ProfileComponent() {
  return (
    <Grid container>
      <Grid xs={12} md={12} lg={3}>
        <ProfileHeader/>
      </Grid>
    </Grid>
  );
}
const mapStateToProps = ()=>({
});

export default connect(mapStateToProps)(ProfileComponent);
