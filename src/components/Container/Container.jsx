import { Box } from '@mui/material';
import styles from './style.module.css';

const Slide = ({ children }) => <Box className={styles.container}>{children}</Box>;

export default Slide;
