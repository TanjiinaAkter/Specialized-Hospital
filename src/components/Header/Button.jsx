import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Button = ({ children, isSecondary }) => (
  <Link to="/" className={isSecondary ? styles.btnSecondary : styles.btn}>
    {children}
  </Link>
);

export default Button;
