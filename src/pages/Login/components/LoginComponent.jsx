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
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../../redux/Auth/actions';
import Loader from '../../../common/components/Loader';
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginComponent(props) {
  const { logIn, authenticating } = props;
  const classes = useStyles();

  const [inputs, setInputs] = useState({ email:'', password:'' });
  const [errors, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isObjectEmpty(errors))
      await logIn(inputs);
  };

  const handleChange = async (e)=>{
    const { name, value } = e.target;

    let errs = {};

    switch(name){
    case 'email': 
      errs.email = 
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
        ? ''
        : 'Email is not valid!';
      break;
    case 'password': 
      errs.password = 
        value.length < 8
          ? 'Password must be 8 characters long!'
          : '';
      break;
    default:
      break;
    }
    setError(errs);
    setInputs({ ...inputs, [name]:value });
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                helperText={errors.email?.length>0 && errors.email}
                error={errors.email?.length>0}
                fullWidth
                value={inputs.email}
                onChange={handleChange}
                id="email"
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
                helperText={errors.password?.length>0 && errors.password}
                error={errors.password?.length>0}
                value={inputs.password}
                onChange={handleChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          {authenticating ? 
            <Loader/>
            : 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
          }
          <Grid container justify="flex-end">
            <Grid item>
              <Link to={'/signup'} variant="body2">
                Register for a new account Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

LoginComponent.propTypes = {
  authenticating: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authenticating: state.auth.authenticating,
  authenticationError: state.auth.authenticationError,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(logIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
