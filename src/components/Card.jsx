import './Card.css'

function Card({ title, description, image, link }) {
  return (
    <>
      <div className="card">
        {image && <img src={image} alt={title} className="card-image" />}

        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>

          {link && (
            <a href={link} className="card-link">
              → Read Blog ←
            </a>
          )}
          </div>
      </div>
    </>
  );
}
export default Card;
