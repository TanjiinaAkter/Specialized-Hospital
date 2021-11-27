import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../Common/Logo';
import links from './links';
import styles from './style.module.css';
import User from './User';

export default function Appbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height="70px">
        <AppBar position="fixed" style={{ background: 'var(--primary)' }}>
          <Toolbar>
            <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" alignItems="center">
                <Logo />
                <Box width="0.5rem" />
                {!user.email && (
                  <Typography textAlign="center" color="var(--white)" variant="h5">
                    Specialized Hospital
                  </Typography>
                )}
              </Box>
              <Box display="flex" alignItems="center">
                {user.email && <User />}

                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, ml: 1 }}
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {links.map(({ name, path }) => (
          <MenuItem onClick={handleClose} key={name}>
            <Link to={path} className={styles.mobileLink}>
              {name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
