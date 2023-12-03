import React from "react";
import MyComponent from "./MyComponent";
const FrontBanner = () => {
  return (
    <div className="container center-container">
      <header className="front-banner-header">
        <h1 className="heading">Write, plan share. With AI at your side.</h1>
        <div className="content">
          <p>
            Notion is the connected workspace where better, faster work happens.
          </p>
          <a href="#" className="button">
            Get Notion free&rarr;
          </a>
        </div>
      </header>
      <img
        className="image-container"
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png"
        alt="Footer"
      />
      {/* <MyComponent /> */}
    </div>
  );
};

export default FrontBanner;