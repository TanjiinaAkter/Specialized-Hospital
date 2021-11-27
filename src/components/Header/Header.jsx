import { Box } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Navbar from '../Navbar/Navbar';
import styles from './style.module.css';
import TopHeader from './TopHeader';

const Header = () => {
  const { user } = useAuth();
  return (
    <Box component="header" className={styles.header}>
      {!user.email && <TopHeader />}
      <Navbar />
    </Box>
  );
};

export default Header;
