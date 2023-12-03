import React from "react";

const Dog = () => {
  return (
    <div className="font-sans mt-20">
      <h1 className="text-6xl font-bold mb-4">Get started for free</h1>
      <div className="text-lg">
        <p>Play around with it first. Pay and add your team later. </p>
        <p className={`button h-12`}>Get Notion free</p>
        <a
          href="/customers"
          className=" text-blue-500 font-semibold hover:underline ml-8"
        >
          Request a demo→
        </a>
      </div>
      <div>
        <img
          className="ml-60"
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png"
        ></img>
      </div>
      <hr />
      <br />
      <br />
    </div>
  );
};

export default Dog;
