import { Google as GoogleIcon } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';

export default () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();

  return (
    <Box color="var(--secondary)" display="flex" py="0.5rem">
      <Button
        onClick={signInUsingGoogle}
        startIcon={<GoogleIcon />}
        variant="outlined"
        color="inherit"
        fullWidth
      >
        Login with Google
      </Button>
      <Box px="1rem" width="100%">
        <Button startIcon={<GoogleIcon />} variant="outlined" fullWidth>
          Login with Facebook
        </Button>
      </Box>
      <Box color="var(--primary)" width="100%">
        <Button
          onClick={signInUsingGithub}
          startIcon={<GoogleIcon />}
          variant="outlined"
          color="inherit"
          fullWidth
        >
          Login with Github
        </Button>
      </Box>
    </Box>
  );
};
