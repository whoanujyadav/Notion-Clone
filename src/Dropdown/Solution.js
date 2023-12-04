import React from "react";
import AnotherSvg from "../svgs/AnotherSvg";

function Solution() {
  return (
    <div className="solution-grid solution-positioning bg-white">
      <div className="solution-complex-box  ">
        <p className="solution-heading">BY TEAM SIZE</p>
        <div>
        <div className="product-left-content product-box">
          <div className="solution-svgclass background-color-inherit">
            <img src="https://www.notion.so/front-static/pages/pricing/personal.png" className="solution-image"></img>
          </div>
          <div className="product-content background-color-inherit">
            <h2 className="product-title background-color-inherit">Enterprise</h2>
            <p className="product-description background-color-inherit">Advanced features of your org</p>
          </div>
        </div>
        <div className="product-left-content product-box">
          <div className="solution-svgclass background-color-inherit">
          <img src="https://www.notion.so/front-static/pages/pricing/pro.png" className="solution-image"></img>
          </div>
          <div className="product-content background-color-inherit">
            <h2 className="product-title background-color-inherit">Small buisness</h2>
            <p className="product-description background-color-inherit">Run your team on one tool</p>
          </div>
        </div>
        <div className="product-left-content product-box">
          <div className="solution-svgclass background-color-inherit">
          <img src="https://i.postimg.cc/V65K2P2c/Whats-App-Image-2023-12-03-at-12-22-49-68da31cc.jpg" className="solution-image"></img>
          </div>
          <div className="product-content background-color-inherit">
            <h2 className="product-title background-color-inherit">Personal</h2>
            <p className="product-description background-color-inherit">Free for individuals</p>
          </div>
        </div>
        </div>
      </div>
      <div className="solution-simple-box border-left-grey">
        <p className="solution-heading">BY TEAM FUNCTION</p>
        <div className="solution-normal-box">
          <p className="solution-single-line">Design</p>
          <p className="solution-single-line">Engineering</p>
          <p className="solution-single-line">Product</p>
          <p className="solution-single-line">Managers</p>
        </div>
      </div>
      <div className="solution-simple-box border-left-grey">
        <p className="solution-heading">NOTION FOR</p>
        <div className="solution-normal-box">
          <p className="solution-single-line">Startups</p>
          <p className="solution-single-line">Remote work</p>
          <p className="solution-single-line">Eductaion</p>
          <p className="solution-single-line">Nonprofits</p>
        </div>
      </div>
    </div>
  );
}

export default Solution;
