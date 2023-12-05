import { Nav } from 'react-bootstrap';

function Navigation(currentPage) { // Ensure props are destructured properly
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      {/* Navigation links using Nav.Link */} /
    <Nav.Item>
        <Nav.Link to="/About" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About Me
        </Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link to="/Contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
          Contact
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link to="/Portfolio" className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
          Portfolio
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link to="/Resume" className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
 
export default Navigation;
