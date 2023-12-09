import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <> 
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
      </> 
  );
}

export default App;
