import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/kmsarmiento/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/kitsarmiento20" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://github.com/KitSarmiento" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/kitsarmiento20/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="ksarmiento020@gmail.com">
          <MdEmail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
