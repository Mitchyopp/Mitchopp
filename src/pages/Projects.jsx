import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1>My projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            repo={project.repo}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
