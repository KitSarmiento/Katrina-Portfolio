import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Header />
      <Navigation/>
      <Outlet />
      <Footer />

    </div>
  );
}

export default App;
