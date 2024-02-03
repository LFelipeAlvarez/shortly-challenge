import { type Card } from "../types/Types";

const Card = ({ icon, title, description }: Card) => {
  return (
    <article
      className={title.includes("Customizable") ? "card card--last" : "card"}
    >
      <div className="card__icon-container">
        <img className="card__icon" src={icon} alt={title} />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{description}</p>
    </article>
  );
};

export default Card;
