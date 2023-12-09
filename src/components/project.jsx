import "../styles/style.css";
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons from Font Awesome or another library

const Project = ({ title, image, projectLink, githubLink }) => {
  return (
    <div className="cardContainer">
    <Card className="portfolioCard" style={{ width: '18rem', margin: '20px 0' }}>
      <Card.Img className="portfolioCardImg" variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title className="portfolioCardTitle">{title}</Card.Title>
        <Card.Link className="portfolioCardLink" href={projectLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt /> Project Link
        </Card.Link>
        <Card.Link className="portfolioCardLink" href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
