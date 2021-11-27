import { useMediaQuery, useTheme } from '@mui/material';
import Appbar from './AppBar';
import LargeScreenNav from './LargeScreenNav';

const Navbar = () => {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return <>{isMD ? <Appbar /> : <LargeScreenNav />}</>;
};
export default Navbar;
