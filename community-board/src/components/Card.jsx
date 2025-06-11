import './Card.css';

const Card = (props) => {
  // props = { title, description, link }
  return (
    <div className="card">
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        Learn More
      </a>
    </div>
  );
};

export default Card;
