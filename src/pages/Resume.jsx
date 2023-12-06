import resumePDF from '../assets/KatrinaSarmientoCV.pdf'; // Import your PDF file

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
    <div>
      <h2>Resume</h2>

      <p>
        <a href={resumePDF} download>
          Download Resume
        </a>
      </p>

      <section>
        <h3>Front-End Skills</h3>
        <ul>
          {frontEndSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Back-End Skills</h3>
        <ul>
          {backEndSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resume;
