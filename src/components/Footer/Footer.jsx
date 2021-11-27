import { Box, Grid, Typography } from '@mui/material';
import Container from '../Container/Container';
import About from './About';
import Links from './Links';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <Box component="footer" bgcolor="#f7f7f7">
    <Box bgcolor="#f7f7f7">
      <Container>
        <Box py="2rem">
          <Grid container spacing={5}>
            <Grid item sm={4}>
              <About />
            </Grid>
            <Grid item sm={4}>
              <Links />
            </Grid>
            <Grid item sm={4}>
              <SocialLinks />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    <Box bgcolor="#fff" textAlign="center" py="1rem">
      <Typography variant="h6" color="var(--primary)">
        Developed By Tanjina Akter
      </Typography>
    </Box>
  </Box>
);

export default Footer;
