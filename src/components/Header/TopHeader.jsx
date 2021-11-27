import { Box, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import Container from '../Container/Container';

export default () => {
  const history = useHistory();
  return (
    <Box bgcolor="var(--neutral)">
      <Container>
        <Box
          display="flex"
          width="100%"
          justifyContent="flex-end"
          color="var(--primary)"
          alignItems="center"
          py="0.25rem"
        >
          <Button size="small" color="inherit" onClick={() => history.push('/user/login')}>
            Login
          </Button>
          <Box height="1.5rem" mx="1rem" width="2px" bgcolor="var(--secondary)" />
          <Button color="inherit" size="small" onClick={() => history.push('/user/signup')}>
            Registration
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
