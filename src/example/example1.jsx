function example1({ name, description, src, alt }) {
  return(
    <div className="card-example">
      <img className="card-image-example" src={src} alt={alt} />
      <h2 className="card-title-example">{name}</h2>
      <p className="card-description-example">{description}</p>
    </div>
  );
}

export default example1
