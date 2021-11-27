import { Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Logo({ isLarge }) {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  return (
    <Box
      borderRadius="50%"
      overflow="hidden"
      width={isLarge ? '140px' : '80px'}
      height={isLarge ? '140px' : '80px'}
      py="0.5rem"
      onClick={handleClick}
    >
      <Box component="img" width="100%" height="100%" src="/logo2.png" alt="Website Logo" />
    </Box>
  );
}
export default Logo;
