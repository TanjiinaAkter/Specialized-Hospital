import { ArrowRight as ArrowRightIcon } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LinkItem = ({ name, path }) => (
  <Box display="flex" py="0.25rem">
    <Box mr="0.5rem" color="var(--primary)">
      <ArrowRightIcon color="inherit" />
    </Box>
    <Link to={path} style={{ textDecoration: 'none', color: 'var(--secondary)' }}>
      {name}
    </Link>
  </Box>
);

const Links = () => (
  <Box>
    <Typography color="var(--primary)" variant="h5">
      Links
    </Typography>
    <Box py="0.5rem">
      <Divider />
    </Box>

    <LinkItem name="Our Specialized" path="/doctors" />
    <LinkItem name="Services" path="/services" />
    <LinkItem name="About Us" path="/about" />
    <LinkItem name="Contact Us" path="/contact" />
  </Box>
);

export default Links;
