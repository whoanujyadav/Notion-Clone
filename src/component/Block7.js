import React from "react";
import Carousals from "./BlockFourCard";

const Endless = () => {
  return (
    <div>
      <div className="w-[80%] flex ml-80">
        <div>
          <h1 className="text-5xl ml-12 font-bold mb-4">
            Endless ways to use it
          </h1>
          <a
            href="/customers"
            className="text-lg text-blue-500 font-semibold hover:underline"
          >
            Browse all templates -
          </a>
        </div>
        <div>
          <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekJ.png"></img>
        </div>
      </div>

      <div className="w-[70%] ml-20 -mt-20 -z-10 flex flex-col sm:flex-row items-center justify-around gap-4 my-5">
        <div className="w-[50%] bg-gray-100 rounded-lg  min-h-[550px]">
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/company-wiki-template.png"
            alt=""
            className="mt-40 w-[95%] h-[20%] pr-1"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-between relative bg-gray-100 rounded-lg min-h-[550px]"></div>
      </div>
    </div>
  );
};

export default Endless;
