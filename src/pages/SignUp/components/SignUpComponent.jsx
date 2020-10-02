import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../../redux/Auth/actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUpComponent(props) {
  const { signingUp, signingUpError, signUpSuccess, signUp } = props;
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signUp({ email, firstName, lastName, password });
  };

  if (signUpSuccess) return <Redirect to={'/login'} />;

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                required
                fullWidth
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                required
                fullWidth
                label="Last Name"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          {signingUp ? 
            <CircularProgress />
            : 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          }
          {signingUpError && 
            <Typography variant={'caption'} color={'error'}>
              {signingUpError}
            </Typography>
          }
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={'/login'} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  signingUp: state.auth.signingUp,
  signingUpError: state.auth.signingUpError,
  signUpSuccess: state.auth.signUpSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(signUp(data)),
});

SignUpComponent.propTypes = {
  signingUp: PropTypes.bool.isRequired,
  signUpSuccess: PropTypes.bool.isRequired,
  signingUpError: PropTypes.string.isRequired,
  signUp:PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
