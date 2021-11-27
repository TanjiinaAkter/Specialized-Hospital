import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../Common/Logo';
import Container from '../Container/Container';
import linksData from './links';
import styles from './style.module.css';
import User from './User';

const LargeScreenNavber = () => {
  const { user } = useAuth();
  return (
    <Box component="nav" className={styles.nav}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Logo />
            <Typography variant="h5" color="var(--primary)" pl="0.5rem">
              Specialized Hospital
            </Typography>
          </Box>
          <Box component="ul" className={styles.navbar}>
            {linksData.map(({ name, path }, index) => (
              <Box
                component="li"
                className={linksData.length === index + 1 ? 'border-none' : ''}
                key={path}
              >
                <Link to={path}>{name}</Link>
              </Box>
            ))}
          </Box>
          {user.email && <User />}
        </Box>
      </Container>
    </Box>
  );
};
export default LargeScreenNavber;
