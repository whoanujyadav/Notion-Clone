import React from "react";
import "./Block2.css";

const Section2 = () => {
  return (
    <div className="mt-28">
      <div className="font-sans">
        <h1 className="text-5xl font-bold mb-4">
          Millions run on Notion every day
        </h1>
        <div className="text-lg">
          <p>Powering the world’s best teams, from next-generation startups </p>
          <p className="mb-2">to established enterprises.</p>
          <a
            href="/customers"
            className=" text-blue-500 font-semibold hover:underline"
          >
            Read customer stories -
          </a>
        </div>
      </div>

      <div>
        <div className="icons-class">
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/1jlyWNfa8mnYxJtmzu5lpV/4072e10330206f9057fe77ab19ce1bca/doordash.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/2VtWKmfmToo8n3X7BY0WwA/ccdcd719ee3bc3fa76148eae11d97c51/nike.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/6dIueLe6mDK6HhNObFq2On/a6cd5c6aa443fe0fc69386522acf7b70/amazon.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/6WgTu82608DIXfxu9KliYL/326d36bbde762fd9c1800872db81244c/pinterest.png"
          ></img>
        </div>

        <div className="icons-class">
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/LnKYnStAE4vKs51ejLRj2/69cb3e0382538d4c925208ea24f253f5/General_Electric_logo.svg__1_.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/3o80U1VqLr5X1nE4kWlZM5/7d1493bad9ba1bd0adf0cf21b6751dd2/uber.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/2owwRqFrnSdM98Js9Itzih/15cca0ca61fbbaadfeef6b70108ffb42/plaid.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/18DMuU2Os0OAYiJxqU3aE7/3f2d9ce2c5761513c4f34f41cf85b028/Screen_Shot_2022-09-27_at_11.11_3.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/346udUCJm76OzP8M0yI78w/81099c4f771df9286782581fe18d0efc/snowflake.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png"
          ></img>
        </div>

        <div className="icons-class">
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/4r1tX1hoz2RZigBJYbFbBJ/37e1dc9aa41342497d3e35a31649b2ae/angel-list.png"
          ></img>
          <img
            className="w-18 h-6"
            src="https://images.ctfassets.net/spoqsaf9291f/4AmP2cmuZ2kUwbeSw3ukj9/91ee33f40debced0e8188a0847cb65af/robinhood_logo.png"
          ></img>
        </div>
      </div>

      <div className="pl-40 pt-20 icons-class1">
        <div className="flex">
          <div className="text-5xl font-bold pt-5">
            <h1>Consolidate tools.</h1>
            <h1>Cut costs.</h1>
          </div>
          <div className="w-217 h-150">
            <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=217/front-static/pages/home/giant-pencil-illustration.png"></img>
          </div>
        </div>

        <div className="absolute mr-60 mt-60">
          <img
            className="w-568 h-78 mt-16"
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-before-notion-V2.png"
          ></img>
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/tools-strikethrough-V2.png"></img>
        </div>
      </div>

      <div>
        <p className="text-3xl pt-40 font-serif">
          "We got rid of nearly a dozen different tools because of <br></br>what
          Notion does for us."
        </p>
        <div className="icons-class1 mt-3">
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=128/front-static/shared/logos/color/metalab.png"></img>
          <div className="ml-2">
            <h1 className="pr-48 font-bold">Justin Watt</h1>
            <p className="font-semibold">
              Director of Ops & Marketing, MetaLab
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
