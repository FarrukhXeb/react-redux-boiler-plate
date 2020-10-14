import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileComponent from './components/ProfileComponent';
import { connect } from 'react-redux';
import CreateOrUpdateProfile from './components/CreateOrUpdateProfile';
import { getProfile, resetProfile } from '../../redux/Profile/actions';
import FullScreenLoader from '../../common/components/FullScreenLoader';
import { Redirect } from 'react-router-dom';
class ProfileContainer extends Component {
  async componentDidMount() {
    await this.props.getProfile(this.props.match.params.fullName);
  }
  async componentWillUnmount(){
    await this.props.profileReset();
  }
  render() {
    const {
      profile,
      gettingProfile,
      gettingProfileError,
    } = this.props;

    if (gettingProfile) return <FullScreenLoader message={'Retrieving Profile'} />;

    if (gettingProfileError.length>0) return <Redirect to={'/'} />;

    if (!profile) return <CreateOrUpdateProfile editing={false} />;

    return <ProfileComponent />;
  }
}

ProfileContainer.propTypes = {
  profile:PropTypes.object,
  match: PropTypes.object.isRequired,
  gettingProfile: PropTypes.bool.isRequired,
  gettingProfileSuccess: PropTypes.bool.isRequired,
  gettingProfileError: PropTypes.string.isRequired,
  getProfile: PropTypes.func.isRequired,
  profileReset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  gettingProfile: state.profile.gettingProfile,
  gettingProfileError: state.profile.gettingProfileError,
  gettingProfileSuccess: state.profile.gettingProfileSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: (fullName) => dispatch(getProfile(fullName)),
  profileReset:()=>dispatch(resetProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
