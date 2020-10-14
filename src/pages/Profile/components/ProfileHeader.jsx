import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Avatar, makeStyles, Typography, Chip, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import ProfileImage from '../static/dummy-profile-pic.png';
import { Edit } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  header:{
    display:'flex',
    justifyContent:'end'
  },
  content:{
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

function ProfileHeader({ profile, user, toggleEdit }) {
  const classes = useStyles();

  return (
    <Paper elevation={4}>
      <div className={classes.header}>
        <IconButton onClick={toggleEdit}>
          <Edit/>
        </IconButton>
      </div>
      <div className={classes.content}>
        <Avatar style={{ width:150, height:150 }} src={ProfileImage}/>
        <Typography className={classes.name} variant={'caption'}>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</Typography>
        <Typography variant={'caption'}>{profile.profession}</Typography>
        <div className={classes.skillContainer}>
          {
            profile.skills.split(',').map(skill=><Chip variant={'outlined'} key={skill} className={'skill'} size={'small'} color={'primary'} label={skill}/>)
          }
        </div>
      </div>
    </Paper>
  );
}

ProfileHeader.propTypes = {
  profile:PropTypes.object.isRequired,
  user:PropTypes.object.isRequired,
  toggleEdit:PropTypes.func.isRequired
};

const mapStateToProps = (state)=>({
  profile:state.profile.profile,
  user:state.auth.user
});

export default connect(mapStateToProps)(ProfileHeader);
