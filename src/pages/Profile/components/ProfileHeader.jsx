import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Avatar, makeStyles, Chip, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import ProfileImage from '../static/dummy-profile-pic.png';

const useStyles = makeStyles((theme)=>({
  root:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:theme.spacing(3)
  },
  name:{
    fontWeight:'bolder',
    marginTop:theme.spacing(1)
  },
  skillContainer:{
    marginTop:theme.spacing(1),
    '& .skill':{
      marginLeft:theme.spacing(1),
      marginRight:theme.spacing(1),
    }
  }
}));

function ProfileHeader({ skills, user }) {
  const classes = useStyles();

  return (
    <Paper elevation={4} className={classes.root}>
      <Avatar style={{ width:150, height:150 }} src={ProfileImage}/>
      <Typography className={classes.name} variant={'caption'}>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</Typography>
      <div className={classes.skillContainer}>
        {
          skills.split(',').map(skill=><Chip variant={'outlined'} key={skill} className={'skill'} size={'small'} color={'primary'} label={skill}/>)
        }
      </div>
    </Paper>
  );
}

ProfileHeader.propTypes = {
  skills:PropTypes.objectOf(PropTypes.object).isRequired,
  user:PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state)=>({
  skills:state.auth.user.profile.skills,
  user:state.auth.user
});

export default connect(mapStateToProps)(ProfileHeader);
