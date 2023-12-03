import React, { useState, useEffect } from "react";

function TestComponent({
  title,
  description,
  isActive,
  onSetActive,
  children,
  color,
}) {
  const myComponentStyle = {
    color: color,
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onSetActive();
  };

  console.log(isActive);
  return (
    <div
      className={`card ${isActive ? "active" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={onSetActive}
      onClick={onSetActive}
    >
      <div className="card-header background-color-inherit">
        <div className="svgclass">{children}</div>
        <p className="title background-color-inherit">{title}</p>
      </div>
      <div
        className={`card-content background-color-inherit ${
          isActive ? "active" : ""
        }`}
      >
        <p className="background-color-inherit">{description}</p>
        {isActive && (
          <a
            href="#"
            className="learn-more background-color-inherit"
            style={myComponentStyle}
          >
            Learn More &rarr;
          </a>
        )}
      </div>
    </div>
  );
}

export default TestComponent;
