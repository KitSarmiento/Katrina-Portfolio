import "../styles/style.css";
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Project = ({ title, image, projectLink, githubLink }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text about the project.
        </Card.Text>
        <Card.Link href={projectLink} target="_blank" rel="noopener noreferrer">Project Link</Card.Link>
        <Card.Link href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</Card.Link>
      </Card.Body>
    </Card>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;