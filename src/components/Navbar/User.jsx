import { Box, CardActionArea, Menu, MenuItem, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ImageAvatars = ({ photoURL, displayName }) => (
  <Stack direction="row" spacing={2}>
    <Avatar alt={displayName} src={photoURL} />
  </Stack>
);

export default () => {
  const { user, logout } = useAuth();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box borderRadius="1rem" overflow="hidden">
      <CardActionArea onClick={handleClick}>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" mr="0.5rem">
            {user.displayName}
          </Typography>
          <ImageAvatars photoURL={user.photoURL} displayName={user.displayName} />
        </Box>
      </CardActionArea>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        px="2rem"
      >
        <MenuItem onClick={() => history.push('/user/profile')} divider>
          Profile
        </MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};
