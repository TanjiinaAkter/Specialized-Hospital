import { Box, Divider, Typography } from '@mui/material';

const About = () => (
  <Box>
    <Typography color="var(--primary)" variant="h5">
      About US
    </Typography>
    <Box py="0.5rem">
      <Divider />
    </Box>
    <Typography variant="body1" color="var(--primary)">
      The specialized Hospital Trust started its journey in June 1980 with a noble vision “To serve
      the humanity”. The trust has agreed upon to provide healthcare service to the people of
      Bangladesh at affordable cost.
    </Typography>
  </Box>
);

export default About;
