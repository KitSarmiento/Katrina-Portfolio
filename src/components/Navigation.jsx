import { Nav } from 'react-bootstrap'; //https://react-bootstrap.netlify.app/docs/components/navbar
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

function Navigation() {
  return (
      <Nav variant="tabs" defaultActiveKey="/">
      
        <NavLink to="/About" className="nav-link" activeclassname="active">
          About Me
        </NavLink>
  
        <NavLink to="/Contact" className="nav-link" activeclassname="active">
          Contact
        </NavLink>
      
        <NavLink to="/Portfolio" className="nav-link" activeclassnamee="active">
          Portfolio
        </NavLink>

        <NavLink to="/Resume" className="nav-link" activeclassnamee="active">
          Resume
        </NavLink>
    </Nav>
  );
}
 
export default Navigation;
