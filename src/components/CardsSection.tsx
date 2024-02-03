import Card from "./Card";

const cardsInfo = [
  {
    title: "Brand Recognition",
    urlIcon: "/images/icon-brand-recognition.svg",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    title: "Detailed Records",
    urlIcon: "/images/icon-detailed-records.svg",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    title: "Fully Customizable",
    urlIcon: "/images/icon-fully-customizable.svg",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const CardsSection = () => {
  return (
    <section className="section section--cards">
      {cardsInfo.map((cardInfo, i) => (
        <Card
          key={i}
          icon={cardInfo.urlIcon}
          title={cardInfo.title}
          description={cardInfo.description}
        />
      ))}
    </section>
  );
};

export default CardsSection;
