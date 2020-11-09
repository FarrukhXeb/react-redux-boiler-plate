import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  ClickAwayListener,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Hidden,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserIcon from '@material-ui/icons/PersonOutline';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { logOut } from '../../redux/Auth/actions';
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Header({
  classes: className,
  logOut,
  user,
  toggleDrawer,
  hasNavToggle,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <AppBar
      position={'static'}
      className={className}
      classes={{
        root: classes.appBar,
      }}
    >
      <Toolbar>
        {!matches && hasNavToggle && 
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        }
        <Hidden smDown>
          <Typography
            variant="h6"
            component={Link}
            to={'/'}
            className={classes.title}
          >
            React App Practice
          </Typography>
        </Hidden>
        <Avatar
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.avatar}
        >
          <UserIcon />
        </Avatar>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => 
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      component={Link}
                      to={`/profile/${user.firstName}-${user.lastName}`}
                      onClick={handleClose}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={'/chat'}
                      onClick={handleClose}
                    >
                      Chat
                    </MenuItem>
                    <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          }
        </Popper>
      </Toolbar>
    </AppBar>
  );
}
Header.propTypes = {
  classes: PropTypes.string,
  logOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func,
  hasNavToggle: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
