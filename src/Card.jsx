import './Card.css'

function Card({ title, description, image, link }) {
  return (
    <>
      <div class="card">
        {image && <img src={image} alt={title} class="card-image" />}

        <div class="card-content">
          <h2>{title}</h2>
          <p>{description}</p>

          {link && (
            <a href={link} class="card-link">
              → Read Blog ←
            </a>
          )}
          </div>
      </div>
    </>
  );
}
export default Card;
