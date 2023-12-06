import Project from '../components/project';
import "../styles/style.css";

const Portfolio = () => {
  const projectsItems = [
    {
      title: 'Weather Dashboard',
      image: '/WeatherDashboard.png',
      projectLink: 'https://kitsarmiento.github.io/Weather-Dashboard/',
      githubLink: 'https://github.com/KitSarmiento/Weather-Dashboard',
    },
    {
      title: 'J.A.T.E. Text Editor',
      image: '/jate.png',
      projectLink: 'https://jate-text-editor.onrender.com/',
      githubLink: 'https://github.com/KitSarmiento/pwa-text-editor',
    },
    {
      title: 'Nate Taker',
      image: '/NoteTaker.png',
      projectLink: 'https://mighty-bayou-75107-3d2f68bf65b2.herokuapp.com/',
      githubLink: 'https://github.com/KitSarmiento/Note-Taker',
    },
    {
      title: 'Employee Tracker',
      image: '/EmployeeTracker.png',
      projectLink: 'https://github.com/KitSarmiento/Employee-Tracker',
      githubLink: 'https://github.com/KitSarmiento/Employee-Tracker',
    },
    {
      title: 'Toronto Newcomers Guide (TNG)',
      image: '/tng.jpg',
      projectLink: 'https://uoftgroup3.github.io/toronto-newcomers-guide/',
      githubLink: 'https://github.com/UofTGroup3/toronto-newcomers-guide',
    },
    {
      title: 'Event Ally',
      image: '/eventAlly.png',
      projectLink: 'https://event-ally-54aab8b70992.herokuapp.com/',
      githubLink: 'https://github.com/KitSarmiento/event-ally',
    },

  ];

  return (
    <div className="portfolioContainer">
      <h1 className="portfolioHeading">Portfolio</h1>
      <div className="portfolioGrid">
        {projectsItems.map((item, index) => (
          <Project
            key={index}
            title={item.title}
            image={item.image}
            projectLink={item.projectLink}
            githubLink={item.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;