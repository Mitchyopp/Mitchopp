import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ title, description, image, link, maxLength = 90 }) {

  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = description.length > maxLength;
  const displayText = expanded || !shouldTruncate ? description : description.slice(0, maxLength) + '...';

  return (
    <>
      <div className="card">
        {image && <img src={image} alt={title} className="card-image" />}

        <div className="card-content">
          <h2>{title}</h2>
          <p>{displayText}</p>

          {shouldTruncate && (
            <button type="button" className="card-toggle" onClick={() => setExpanded((prev) => !prev)}> {expanded ? 'Show less' : 'Show more'}</button>
          )}

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
