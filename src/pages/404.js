import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Container from '../components/Container/Container';

function CoursesPage() {
  const history = useHistory();
  return (
    <Box py="1rem">
      <Container>
        <Box textAlign="center" py="8rem">
          <Typography variant="h1" color="text.secondary">
            Sorry!
          </Typography>
          <Typography variant="h2" color="var(--primary)">
            404 Page Not Found!
          </Typography>
          <Box textAlign="center" py="2rem">
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              startIcon={<ArrowBackIcon />}
              onClick={() => history.push('/')}
            >
              Back To Home
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default CoursesPage;
