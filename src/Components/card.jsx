import { Hotels } from "./Hotels";

const Cards = (props) => {
  const { image, title } = props;
  return (
    <section className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button type="button">Book Vehicle</button>
      <button type="button">Map</button>
    </section>
  );
};

export default Cards;
