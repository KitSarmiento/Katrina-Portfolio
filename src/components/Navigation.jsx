import { Nav } from 'react-bootstrap'; //https://react-bootstrap.netlify.app/docs/components/navbar
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <NavLink exact to="/About" className="nav-link" activeClassName="active">
          About Me
        </NavLink>
      </Nav.Item>
      
      <Nav.Item>
        <NavLink to="/Contact" className="nav-link" activeClassName="active">
          Contact
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink to="/Portfolio" className="nav-link" activeClassName="active">
          Portfolio
        </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink to="/Resume" className="nav-link" activeClassName="active">
          Resume
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}
 
export default Navigation;
