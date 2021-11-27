import { Box, Button, Paper, Typography } from '@mui/material';
import ListItem from '../../components/Common/ListItem';
import Title from '../../components/Common/Title';
import Container from '../../components/Container/Container';
import useAuth from '../../hooks/useAuth';

function AboutPage() {
  const { user, logout } = useAuth();
  return (
    <Box pt="7rem" pb="5rem">
      <Container>
        <Title fTitle="User" lTitle="Profile" />
        <Box height="1rem" />
        <Box textAlign="center">
          <Box margin="auto" width="100px" height="100px" borderRadius="50%" overflow="hidden">
            <Box component="img" src={user.photoURL} width="100%" height="100%" />
          </Box>
          <Typography variant="h5">{user.displayName}</Typography>
        </Box>
        <Paper>
          <Box p="1rem">
            <ListItem name="Display Name" desc={user.displayName} />
            <ListItem name="Email" desc={user.email} />
            <ListItem name="Profile Status" desc={user.emailVerified ? 'Verified' : 'Unverified'} />
            <ListItem name="Phone No" desc={user.phoneNumber || 'N/A'} />
            <Box height="1rem" />

            <Button onClick={logout} variant="outlined" color="error" fullWidth>
              Logout
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
export default AboutPage;
