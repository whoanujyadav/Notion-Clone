import React, { useState } from "react";
import Logo from "./svgs/Logo";
import Download from "./Dropdown/Download";
import Product from "./Dropdown/Product";
import Resorces from "./Dropdown/Resorces";
import Solution from "./Dropdown/Solution";

function Navbar() {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [clickedElement, setClickedElement] = useState(null);
  const [activeElement, setActiveElement] = useState(null);
  const [activeHoveredElement, setActiveHoveredElement] = useState(null);
  const handleMouseEnter = (element) => {
    setHoveredElement(element);
    // setActiveElement(element);
    setActiveHoveredElement(element);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
    setActiveHoveredElement(null);
  };

  const handleClick = (element) => {
    setClickedElement(element);
    setHoveredElement(null);
    setActiveElement(element)
    setActiveHoveredElement(null);
  };

  const clearClickedState = () => {
    setClickedElement(null);
    setActiveElement(null);
  };

  const isElementHovered = (element) => {
    return element === hoveredElement ? "nav-active " : "";
  };

  const isElementClicked = (element) => {
    return element === clickedElement ? "nav-active" : "";
  };

  const renderArrow = (element) => {
    return !isElementHovered(element) ? (
      <span className="nav-arrow background-color-inherit">&or;</span>
    ) : (
      <span className="nav-arrow background-color-inherit">&and;</span>
    );
  };
  
  

  return (
    <div className="navbar NavBarColour" onMouseLeave={clearClickedState}>
      <div className="left-navbar">
        <Logo />
        <div
          className={`heading-container nav-normal-box ${isElementHovered(
            "Product"
          )} ${isElementClicked("Product")}`}
          onMouseEnter={() => handleMouseEnter("Product")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("Product")}
        >
          <a href="#" className="background-color-inherit">
            Product
          </a>
          {renderArrow("Product")}
        </div>
        <div
          className={`heading-container nav-normal-box ${isElementHovered(
            "Download"
          )} ${isElementClicked("Download")}`}
          onMouseEnter={() => handleMouseEnter("Download")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("Download")}
        >
          <a href="#" className="background-color-inherit">
            Download
          </a>
          {renderArrow("Download")}
        </div>
        <div
          className={`heading-container nav-normal-box ${isElementHovered(
            "Solution"
          )} ${isElementClicked("Solution")}`}
          onMouseEnter={() => handleMouseEnter("Solution")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("Solution")}
        >
          <a href="#" className="background-color-inherit">
            Solution
          </a>
          {renderArrow("Solution")}
        </div>
        <div
          className={`heading-container nav-normal-box ${isElementHovered(
            "Resources"
          )} ${isElementClicked("Resources")}`}
          onMouseEnter={() => handleMouseEnter("Resources")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("Resources")}
        >
          <a href="#" className="background-color-inherit">
            Resources
          </a>
          {renderArrow("Resources")}
        </div>
        <div
          className={`heading-container nav-normal-box ${isElementHovered(
            "Pricing"
          )} ${isElementClicked("Pricing")}`}
          onMouseEnter={() => handleMouseEnter("Pricing")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("Pricing")}
        >
          <a href="#" className="background-color-inherit">
            Pricing
          </a>
        </div>
      </div>
      <div className="right-navbar">
        <div
          className={`heading-container nav-normal-box ${isElementHovered(
            "RequestDemo"
          )} ${isElementClicked("RequestDemo")}`}
          onMouseEnter={() => handleMouseEnter("RequestDemo")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("RequestDemo")}
        >
          <a href="#" className="background-color-inherit">
            Request a demo
          </a>
        </div>
        <div className="thin-line"></div>
        <div
          className={`heading-container nav-normal-box ${isElementHovered(
            "LogIn"
          )} ${isElementClicked("LogIn")}`}
          onMouseEnter={() => handleMouseEnter("LogIn")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("LogIn")}
        >
          <a href="#" className="background-color-inherit">
            Log in
          </a>
        </div>
        <p className={`heading-container nav-button `}>Get Notion free</p>
      </div>
      {(activeElement === "Download"||activeHoveredElement==="Download") && <Download />}
      {(activeElement === "Product"||activeHoveredElement === "Product") && <Product />}
      {(activeElement === "Resources"||activeHoveredElement === "Resources") && <Resorces />}
      {(activeElement === "Solution"||activeHoveredElement === "Solution") && <Solution />}
    </div>
  );
}

export default Navbar;