import resumePDF from '../assets/KatrinaSarmientoCV.pdf'; // Import my resume/CV PDF file
import "../styles/style.css"

const Resume = () => {
  // Front-end skills
  const frontEndSkills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'UI/UX Design', /* Add more as needed */
  ];

  // Back-end skills
  const backEndSkills = [
    'Node.js', 'Express.js', 'MongoDB', 'SQL', 'RESTful APIs', 'GraphQL', /* Add more as needed */
  ];

  return (
    <div className="about-container">
      <h1>Resume</h1>

      <p>
        <a href={resumePDF} download>
          Download Resume
        </a>
      </p>

      <div className="skills-container">
        <section className="skills-section">
          <h2>Front-End Skills</h2>
          <ul>
            {frontEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="skills-section">
          <h2>Back-End Skills</h2>
          <ul>
            {backEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
