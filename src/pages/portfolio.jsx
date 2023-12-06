import Project from '../components/project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'url_to_image_1.jpg',
      projectLink: 'url_to_project_1',
      githubLink: 'url_to_github_1',
    },
    {
      title: 'Project 2',
      image: 'url_to_image_2.jpg',
      projectLink: 'url_to_project_2',
      githubLink: 'url_to_github_2',
    },
    {
      title: 'Project 3',
      image: 'url_to_image_3.jpg',
      projectLink: 'url_to_project_3',
      githubLink: 'url_to_github_3',
    },
    {
      title: 'Project 4',
      image: 'url_to_image_4.jpg',
      projectLink: 'url_to_project_4',
      githubLink: 'url_to_github_4',
    },
    {
      title: 'Project 5',
      image: 'url_to_image_5.jpg',
      projectLink: 'url_to_project_5',
      githubLink: 'url_to_github_5',
    },
    {
      title: 'Project 6',
      image: 'url_to_image_6.jpg',
      projectLink: 'url_to_project_6',
      githubLink: 'url_to_github_6',
    },

  ];

  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          projectLink={project.projectLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Portfolio;