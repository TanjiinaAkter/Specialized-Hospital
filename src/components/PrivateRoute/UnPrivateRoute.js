import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UnPrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/user/profile',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default UnPrivateRoute;
