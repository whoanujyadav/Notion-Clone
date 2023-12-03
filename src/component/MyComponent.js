import React, { useState } from "react";
import TestComponent from "./TestComponent";
import BookOpenSvg from "../svgs/BookOpenSvg";
import AnotherSvg from "../svgs/AnotherSvg";
import YetAnotherSvg from "../svgs/YetAnotherSvg";
import OneMoreSvg from "../svgs/OneMoreSvg";

function MyComponent() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [cardData, setCardData] = useState([
    {
      title: "AI",
      description: "Ask literally anything. Notion will answer",
      isActive: false,
      imageSrc:
        "https://i.postimg.cc/1XdjCjfz/Whats-App-Image-2023-12-03-at-11-31-06-eb1f373e.jpg",
      svgElement: <BookOpenSvg />,
      color: "orange",
    },
    {
      title: "Wikis",
      description: "Centralize your knowledge. No more hunting for answers.",
      isActive: false,
      imageSrc:
        "https://i.postimg.cc/g2zgypMK/Whats-App-Image-2023-12-03-at-11-28-56-aa7189d9.jpg",
      svgElement: <AnotherSvg />,
      color: "purple",
    },
    {
      title: "Projects",
      description: "Manage complex projectswithout the chaos",
      isActive: false,
      imageSrc:
        "https://i.postimg.cc/gj3gs2Fg/Whats-App-Image-2023-12-03-at-11-30-04-99396bc2.jpg",
      svgElement: <OneMoreSvg />,
      color: "lightblue",
    },
    {
      title: "Docs",
      description: "Simple, powerful, beautiful. Next-gen  notes & docs.",
      isActive: true,
      imageSrc:
        "https://i.postimg.cc/Xv2mBq4F/Whats-App-Image-2023-12-03-at-11-30-42-131b9cd6.jpg",

      svgElement: <YetAnotherSvg />,
      color: "#f5c905",
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
    <div className="grid-container">
      <div className="anime-grid">
        <div className="anime-comp">
          {cardData.map((card, index) => (
            <TestComponent
              key={index}
              {...card}
              onSetActive={() => handleSetActive(index)}
            >
              {card.svgElement}
            </TestComponent>
          ))}
        </div>
        <div className="anime-image">
          {activeIndex !== null && (
            <img
              src={cardData[activeIndex].imageSrc}
              alt={`Active Card ${activeIndex + 1}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
