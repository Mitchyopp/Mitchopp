import './ProjectCard.css'

function ProjectCard({ title, description, image, repo }) {
    return (
      <>
        <div className="project-card">
          <h1>{title}</h1>
          <p>{description}</p>
          {repo && (
            <a href={repo} className="repo">{title}</a>
          )}
          {image && (
            <img src={image} className="image" alt={`${title} screenshot`} width="800" />
          )}
        </div>
      </>
    );
}

export default ProjectCard;
