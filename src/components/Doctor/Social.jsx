/* eslint-disable prettier/prettier */
import {
    Facebook as FacebookIcon,
    Instagram as InstagramIcon, LinkedIn as LinkedInIcon, Twitter as TwitterIcon
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

const SocialLinks = () => (
  <Box display="flex" justifyContent="space-between" color="var(--primary)">
    <IconButton size="large" color="inherit" href="https://facebook.com" target="_blank">
      <FacebookIcon />
    </IconButton>
    <IconButton size="large" color="inherit" href="https://youtube.com" target="_blank">
      <LinkedInIcon />
    </IconButton>
    <IconButton size="large" color="inherit" href="https://twitter.com" target="_blank">
      <TwitterIcon />
    </IconButton>
    <IconButton size="large" color="inherit" href="https://instagram.com" target="_blank">
      <InstagramIcon />
    </IconButton>
  </Box>
);

export default SocialLinks;
