import React from "react";

const Carousals = () => {
  return (
    <div>
      <div className="w-[85%] m-auto flex flex-col sm:flex-row items-center justify-around gap-4 my-5">
        <div className="w-[50%] bg-[#F6F5F4] rounded-lg  min-h-[550px]">
          <img className="ml-6 mt-5 h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7mDX4Xy0dLXy7ihC4ZA5rzPcaaPKojccTWG_Nh86rJ0VPj6-MOX8PPdNqbebRIzfq2A&usqp=CAU"></img>
          <div className="flex flex-col items-start p-6">
            <p className="text-xl text-black font-bold">
              Customize the info you track
            </p>
            <p className=" text-gray-700">
              Create your own labels, tags, owners, and more, so ev
            </p>
            <p className=" text-gray-700">
              eryone has context and everything stays organized.
            </p>
          </div>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png"
            alt=""
            className="mt-5 pr-1"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-between relative bg-[#F6F5F4] rounded-lg min-h-[550px]">
        <img className="ml-6 mt-5 h-10 w-10" src="https://cdn6.aptoide.com/imgs/f/2/d/f2dac40669721830ff55d6e80022dbc3_icon.png?w=128"></img>

          <div className="flex flex-col items-start p-8">
            <p className="text-xl text-black font-bold">
              Build any page, communicate any idea
            </p>
            <p className=" text-gray-700">
              CEverything is drag and drop in Notion — images, toggles,
            </p>
            <p className=" text-gray-700">to-do’s, even embedded databases.</p>
          </div>
          <img
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png"
            alt=""
            className="mt-1 pr-1"
          />
        </div>
      </div>

      <div>
        <p className="text-3xl pt-5 font-serif">
          "Notion adapts to your needs. It’s as minimal or as<br></br>powerful
          as you need it to be."
        </p>
        <div className="icons-class1 mt-3">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=48/front-static/shared/logos/color/match-group.png"></img>
          <div className="ml-2">
            <h1 className="pr-48 font-bold">Rahim Makani</h1>
            <p className="font-semibold mr-16">
              Director of Product, Matchgroup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousals;
