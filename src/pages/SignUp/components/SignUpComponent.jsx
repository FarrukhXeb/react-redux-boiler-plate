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
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../../redux/Auth/actions';
import Loading from '../../../common/components/Loader';
import isObjectEmpty from '../../../utils/isObjectEmpty';

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
  const [inputs, setInputs] = useState({
    email:'',
    password:'',
    confirmPassword:'',
    firstName:'',
    lastName:''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(isObjectEmpty(errors)){
      await signUp(inputs);
    }
  };

  const handleChange = (e)=>{
    const { name, value } = e.target;

    let errs = {};

    switch (name) {
    case 'email': 
      errs.email = 
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
        ? ''
        : 'Email is not valid!';
      break;
    case 'firstName':
      errs.firsName = value.length===0?'First name is required':'';
      break;
    case 'lastName':
      errs.firsName = value.length===0?'Last name is required':'';
      break;
    case 'password': 
      errs.password = 
        value.length < 8
          ? 'Password must be 8 characters long!'
          : '';
      break;
    case 'confirmPassword':
      errs.confirmPassword = value!==inputs.password?'Passwords do not match':'';
      break;
    
    default:
      break;
    }

    setErrors(errs);
    setInputs({ ...inputs, [name]:value });
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
                name={'firstName'}
                variant="outlined"
                helperText={errors.firstName?.length>0 && errors.firstName}
                error={errors.firstName?.length>0}
                value={inputs.firstName}
                onChange={handleChange}
                fullWidth
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={inputs.lastName}
                name={'lastName'}
                helperText={errors.lastName?.length>0 && errors.lastName}
                onChange={handleChange}
                fullWidth
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                value={inputs.email}
                helperText={errors.email?.length>0 && errors.email}
                error={errors.email?.length>0}
                onChange={handleChange}
                label="Email Address"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                value={inputs.password}
                helperText={errors.password?.length>0 && errors.password}
                error={errors.password?.length>0}
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                autoComplete={'password'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={inputs.confirmPassword}
                onChange={handleChange}
                fullWidth
                helperText={errors.confirmPassword?.length>0 && errors.confirmPassword}
                error={errors.confirmPassword?.length>0}
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete={'confirm-password'}
              />
            </Grid>
          </Grid>
          {signingUp ? 
            <Loading />
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
