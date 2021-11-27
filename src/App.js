import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Provider from './context/provider';
import Routes from './Routes';

function App() {
  return (
    <Provider>
      <AuthProvider>
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </AuthProvider>
    </Provider>
  );
}
export default App;
