import './ProjectCard.css'

function Projects({ title, description, image }) {
  if (image) {
    return (
      <>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt={`${title} screenshot`} width="800" />
      </>
    );
  } else {
    return (
      <>
        <h1>{title}</h1>
        <p>{description}</p>
      </>
    );
  }
}

export default Projects;
