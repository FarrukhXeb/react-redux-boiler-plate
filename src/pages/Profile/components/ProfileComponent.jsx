import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import CreateOrUpdateProfile from './CreateOrUpdateProfile';
import ProfileHeader from './ProfileHeader';

function ProfileComponent() {
  const [editing, toggleEdit] = useState(false);

  return editing ? 
    <CreateOrUpdateProfile
      toggleEdit={() => toggleEdit(false)}
      editing={editing}
    />
    : 
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <ProfileHeader toggleEdit={() => toggleEdit(true)} />
      </Grid>
    </Grid>
  ;
}
const mapStateToProps = () => ({});

export default connect(mapStateToProps)(ProfileComponent);
