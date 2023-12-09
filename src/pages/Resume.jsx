import resumePDF from '/KatrinaSarmientoCV.pdf';// Import my resume/CV PDF file
import "../styles/style.css";

const Resume = () => {
    // Front-end skills
  const frontEndSkills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'UI/UX Design',
  ];

    // Back-end skills
  const backEndSkills = [
    'Node.js', 'Express.js', 'MongoDB', 'SQL', 'RESTful APIs', 'GraphQL',
  ];

  const handleDownloadResume = () => {
    window.open(resumePDF, '_blank');
  };

  const h2Style = {
    color: 'white',
  };

  return (
    <div className="resume-container page-container">
      <h1>Resume</h1>
      <div className="skills-container">
        <section className="skills-section">
          <h2 style={h2Style}>Front-End Skills</h2>
          <ul>
            {frontEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
        <section className="skills-section">
          <h2 style={h2Style}>Back-End Skills</h2>
          <ul>
            {backEndSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
      <button className="resume-download-btn" onClick={handleDownloadResume}>
        Download My Resume
      </button>
    </div>
  );
};

export default Resume;
