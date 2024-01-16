import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = () => {
  const classes = useStyles();
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={menuAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          keepMounted
          open={Boolean(menuAnchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMenuClose}>About</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        </Menu> */}
        <Typography variant="h6" className={classes.title}>
          Restaurant Advisor
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
