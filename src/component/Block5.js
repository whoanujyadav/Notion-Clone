import React, { useState } from "react";

function DamnCard({
  title = "Title",
  isActive,
  onSetActive,
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogEIzUmssX1ZtzGYBJIRM4GPbBNtIq9eijgSp_I2ZFQ&s",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`new-card ${isActive ? "active" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSetActive}
    >
      <div className=" damn-image  background-color-inherit ">
        <img
          src={image}
          alt={`Active Card`}
          className="background-color-inherit"
        />
      </div>
      <p className="background-color-inherit">{title}</p>
    </div>
  );
}

export default DamnCard;
