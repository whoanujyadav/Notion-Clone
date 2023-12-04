import React from "react";
import AnotherSvg from "../svgs/AnotherSvg";
import BookOpenSvg from "../svgs/BookOpenSvg";
import YetAnotherSvg from "../svgs/YetAnotherSvg";
import OneMoreSvg from "../svgs/OneMoreSvg";

function Product() {
  return (
    <div className="product-grid product-positioning bg-white">
      <div className="product-flex">
        <div className="product-left-content product-box">
          <div className="product-svgclass background-color-inherit">
            <BookOpenSvg />
          </div>
          <div className="product-content background-color-inherit">
            <h2 className="product-title background-color-inherit">Wikis</h2>
            <p className="product-description background-color-inherit">Centralize your knowledge</p>
          </div>
        </div>
        <div className="product-left-content product-box background-color-inherit">
          <div className="product-svgclass background-color-inherit">
            <AnotherSvg />
          </div>
          <div className="product-content background-color-inherit">
            <h2 className="product-title background-color-inherit">Projects</h2>
            <p className="product-description background-color-inherit">For every team or size</p>
          </div>
        </div>
        <div className="product-left-content product-box background-color-inherit">
          <div className="product-svgclass background-color-inherit">
            <YetAnotherSvg />
          </div>
          <div className="product-content background-color-inherit">
            <h2 className="product-title background-color-inherit">Docs</h2>
            <p className="product-description background-color-inherit">Smple & powerful</p>
          </div>
        </div>
        <div className="product-left-content product-box background-color-inherit">
          <div className="product-svgclass background-color-inherit">
            <OneMoreSvg />
          </div>
          <div className="product-content background-color-inherit">
            <h2 className="product-title background-color-inherit">Notion AI</h2>
            <p className="product-description background-color-inherit">Integrated AI assistant</p>
          </div>
        </div>
      </div>
      <div className="product-flex border-left-grey">
        <div className="product-right-content product-box ">
          <h2 className="product-title background-color-inherit">Template Gallery</h2>
          <p className="product-description background-color-inherit">Setups to get you started</p>
        </div>
        <div className="product-right-content product-box ">
          <h2 className="product-title background-color-inherit">Customer stories</h2>
          <p className="product-description  background-color-inherit">See how teams use Notion</p>
        </div>
        <div className="product-right-content product-box">
          <h2 className="product-title background-color-inherit">Connections</h2>
          <p className="product-description background-color-inherit">Connect yout tools to Notion</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
