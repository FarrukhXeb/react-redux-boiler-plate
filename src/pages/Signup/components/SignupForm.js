import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FirebaseHoc } from '../../../hoc/withFirebase';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: null,
};

class SignupForm extends Component {
  state = { ...INITIAL_STATE };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const { username, email, password, confirmPassword, error } = this.state;

    const isInvalid =
      password !== confirmPassword ||
      password === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.handleSubmit}>
        <div className={'form-group'}>
          <input
            placeholder={'Email'}
            className={'form-control'}
            value={email}
            onChange={this.onChange}
            name={'email'}
            type={'email'}
            required
          />
        </div>
        <div className={'form-group'}>
          <input
            placeholder={'Username'}
            className={'form-control'}
            onChange={this.onChange}
            name={'username'}
            value={username}
            type={'text'}
            required
          />
        </div>
        <div className={'form-group'}>
          <input
            placeholder={'Password'}
            className={'form-control'}
            onChange={this.onChange}
            value={password}
            name={'password'}
            type={'password'}
            required
          />
        </div>
        <div className={'form-group'}>
          <input
            placeholder={'Confirm Password'}
            className={'form-control'}
            onChange={this.onChange}
            value={confirmPassword}
            name={'confirmPassword'}
            type={'password'}
            required
          />
        </div>
        <div className={'form-group'}>
          {error && <p className={'text-danger'}>{error}</p>}
        </div>
        <div className={'form-group'}>
          <Button
            disabled={isInvalid}
            type={'submit'}
            variant={'primary'}
            size={'sm'}
          >
            Register
          </Button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  doCreateUserWithEmailAndPassword: PropTypes.func.isRequired,
};

export default FirebaseHoc(SignupForm);
