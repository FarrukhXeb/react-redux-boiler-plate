import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  TextField,
  makeStyles,
  Typography,
  Select,
  Chip,
  Input,
  MenuItem,
  useTheme,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  IconButton,
  Tooltip
} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { connect } from 'react-redux';
import hasNumbers from '../../../utils/hasNumbers';
import isObjectEmpty from '../../../utils/isObjectEmpty';
import { createProfile, updateProfile } from '../../../redux/Profile/actions';
import Loader from '../../../common/components/Loader';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bolder',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  formControl: {
    margin: theme.spacing(1),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const names = [
  'Web Development',
  'Node Js',
  'Accountant',
  'Dev Ops',
  'Front End Development',
  'Back End Development',
  'Wordpress',
];

function getStyles(name, skill, theme) {
  return {
    fontWeight:
      skill.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const CreateOrUpdateProfile = (props) => {
  const {
    creatingProfile,
    createProfile,
    editing,
    updatingProfile,
    updateProfile,
    profile,
    toggleEdit,
  } = props;

  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [skills, setSkills] = useState([]);
  const [profession, setProfession] = useState('');
  const theme = useTheme();

  useEffect(() => {
    if (profile) {
      setProfession(profile.profession);
      setSkills(profile.skills.split(','));
    }
  }, [profile]);

  const handleChange = (event) => {
    setSkills(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (isObjectEmpty(errors)) {
      const data = { profession, skills: skills.join(',') };

      editing ? updateProfile(data) : createProfile(data);

      toggleEdit();
    }
  };

  const validateForm = () => {
    let errs = {};

    if (skills.length === 0) errs.skills = 'Input atleast one skill set';
    if (profession === '') errs.profession = 'Profession is required';
    if (hasNumbers(profession)) errs.profession = 'Input only alphabets';
    setErrors(errs);
  };

  return (
    <Grid container>
      <Grid item xs={12} lg={12} md={12}>
        <Paper elevation={4} className={classes.paper}>
          <div className={classes.header}>
            {editing && 
            <Tooltip title={'Back'}>
              <IconButton onClick={toggleEdit}>
                <ArrowBack />
              </IconButton>
            </Tooltip>
            }
            <Typography className={classes.title} variant={'h6'}>
              {editing ? 'Update your profile' : 'Create your profile'}
            </Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} lg={12} md={12}>
        <Paper elevation={4} className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                fullWidth
                helperText={errors.profession?.length > 0 && errors.profession}
                error={errors.profession?.length > 0}
                label="Professional Status"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel>Select your skills</InputLabel>
              <Select
                multiple
                fullWidth
                value={skills}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => 
                  <div className={classes.chips}>
                    {selected.map((value) => 
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    )}
                  </div>
                }
              >
                {names.map((name) => 
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, skills, theme)}
                  >
                    {name}
                  </MenuItem>
                )}
              </Select>
              {errors.skills?.length > 0 && 
                <FormHelperText>{errors.skills}</FormHelperText>
              }
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              {creatingProfile || updatingProfile ? 
                <Loader />
                : 
                <Button
                  fullWidth
                  type="submit"
                  variant={'contained'}
                  color={'primary'}
                >
                  {editing ? 'Update' : 'Submit'}
                </Button>
              }
            </FormControl>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

CreateOrUpdateProfile.propTypes = {
  creatingProfile: PropTypes.bool.isRequired,
  updatingProfile: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  createProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func,
  profile: PropTypes.object,
};

const mapStateToProps = (state) => ({
  creatingProfile: state.profile.creatingProfile,
  updatingProfile: state.profile.updatingProfile,
  profile: state.profile.profile,
});

const mapDispatchToProps = (dispatch) => ({
  createProfile: (data) => dispatch(createProfile(data)),
  updateProfile: (data) => dispatch(updateProfile(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOrUpdateProfile);
