import { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UnPrivateRoute from './components/PrivateRoute/UnPrivateRoute';
import context from './context/context';
import FourZeroFour from './pages/404';
import AboutPage from './pages/About';
import contactPage from './pages/Contact';
import DoctorDetailsPage from './pages/DoctorDetails';
import DoctorsPage from './pages/Doctors';
import homePage from './pages/Home';
import LoginPage from './pages/Login';
import ServiceDetailsPage from './pages/ServiceDetails';
import servicesPage from './pages/Services';
import SignupPage from './pages/SingUp';
import UserProfilePage from './pages/user/Profile';

const routes = [
  {
    component: homePage,
    path: '/',
  },
  {
    component: DoctorsPage,
    path: '/doctors',
  },
  {
    component: DoctorDetailsPage,
    path: '/doctors/:id',
  },
  {
    component: servicesPage,
    path: '/services',
  },
  {
    component: ServiceDetailsPage,
    path: '/services/:id',
  },
  {
    component: AboutPage,
    path: '/about',
  },
  {
    component: contactPage,
    path: '/contact',
  },

  {
    component: FourZeroFour,
    path: '*',
  },
];

function Routes() {
  const { fetchCoursesData, fetchServicesData } = useContext(context);
  useEffect(async () => {
    await fetchCoursesData();
    await fetchServicesData();
  }, []);
  return (
    <main>
      <Switch>
        <PrivateRoute path="/user/profile">
          <UserProfilePage />
        </PrivateRoute>
        <UnPrivateRoute path="/user/login">
          <LoginPage />
        </UnPrivateRoute>
        <UnPrivateRoute path="/user/signup">
          <SignupPage />
        </UnPrivateRoute>
        {routes.map(({ component, path }) => (
          <Route path={path} exact component={component} key={path} />
        ))}
      </Switch>
    </main>
  );
}
export default Routes;
