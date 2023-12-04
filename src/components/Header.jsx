//Use inline css to style the Header
import '../styles/style.css';

const styles = {
  headerStyle: {
    background: '#EFD0CA',
  },
  headingStyle: {
    color: "#214E34",
    fontSize: '100px',
  },
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Katrina Sarmiento</h1>
    </header>
  );
}

export default Header;
