import React, { useState } from "react";
import TestComponent from "./TestComponent";
import DamnCard from "./Block5";

function DamnComponent() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [cardData, setCardData] = useState([
    {
      title: "Engineering",
      isActive: false,
      image:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png",
      image2:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/engineering.png",
    },
    {
      title: "Design",
      isActive: false,
      image:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png",
      image2:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/design.png",
    },
    {
      title: "Product",
      isActive: false,
      image:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/product.png",
      image2:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/product.png",
    },
    {
      title: "Marketing",
      isActive: true,
      image:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png",
      image2:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/marketing.png",
    },
    {
      title: "Operations",
      isActive: false,
      image:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/operations.png",
      image2:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/operations.png",
    },
    {
      title: "HR",
      isActive: true,
      image:
        "https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png",
      image2:
        "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png",
    },
  ]);

  const handleSetActive = (index) => {
    setCardData((prevData) =>
      prevData.map((card, i) => ({
        ...card,
        isActive: i === index,
      }))
    );
    setActiveIndex(index);
  };

  return (
    <div className="grid-container pt-20">
      <h1 className="san-serif font-bold pb-8 text-5xl">
        Every team, side-by-side
      </h1>
      <div className="anime-grid">
        <div className="anime-comp">
          {cardData.map((card, index) => (
            <DamnCard
              key={index}
              {...card}
              onSetActive={() => handleSetActive(index)}
            >
              {card.svgElement}
            </DamnCard>
          ))}
        </div>
        <div className="anime-image">
          {activeIndex !== null && (
            <img
              src={cardData[activeIndex].image2}
              alt={`Active Card ${activeIndex + 1}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default DamnComponent;
