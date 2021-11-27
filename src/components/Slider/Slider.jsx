import { Box, Typography } from '@mui/material';
import Container from '../Container/Container';
import Button from './Button';
import styles from './style.module.css';

const Slide = () => (
  <Box className={styles.slider}>
    <img
      src="/thumbnails/team-doctors-meeting.jpg"
      alt="website slideimage"
      className={styles.img}
    />
    <Box className={styles.textContent}>
      <Container>
        <Box height="100%" display="flex" alignItems="center">
          <Box>
            <Box py="2rem">
              <Typography color="var(--white)" variant="h3">
                Welcome to
              </Typography>
              <Typography color="var(--white)" variant="h2">
                Specialized Hospital
              </Typography>
            </Box>
            <Typography color="var(--white)" variant="h4">
              We are here to help!
            </Typography>
            <Typography color="var(--white)" variant="subtitle1" pb="2rem" maxWidth="600px">
              Pennsylvanians’ healthcare just got even more accessible and affordable! The American
              Rescue Plan is now offering significant financial savings to nearly everyone.
            </Typography>
            <Box py="1rem">
              <Button isSecondary path="/doctors">
                Find a specialized
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
);
export default Slide;
