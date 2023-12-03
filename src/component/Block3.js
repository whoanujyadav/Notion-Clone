import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 87%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-top: 60px;
  padding: 10px;
`;

const Main = styled.div`
  background: #f6f5f4;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  justify-content: center;
`;

const Heading = styled.h1`
  margin-bottom: 10px;
  width: 80%;
  background: bluee;
  font-size: 2.8rem;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  & > span {
    vertical-align: center;
    background: redd;
    display: flex;
    align-items: center;
    align-self: end;
    margin: 20px;
  }
  & > img {
    position: relative;
    top: 25px;
  }
`;
const Image = styled.div`
  margin-left: auto;
  margin-right: auto;

  & > img {
    max-width: 99%;
    border-radius: 10px;
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Button = styled.div`
  display: inline-block;
  margin: 10px;
  margin-bottom: 0;
  margin-top: 20px;
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 3px 10px;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
`;

const ACTIVE = {
  background: "lightgray",
};
const INACTIVE = {
  background: "transparent",
};

function Home() {
  const [currentImage, setCurrentImage] = useState("table");
  const [imageLink, setImageLink] = useState("");

  useEffect(() => {
    switch (currentImage) {
      case "board":
        return setImageLink(
          "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/list.png"
        );
      case "table":
        return setImageLink(
          "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/table.png"
        );
      case "timeline":
        return setImageLink(
          "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/timeline.png"
        );
      case "calendar":
        return setImageLink(
          "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/calendar.png"
        );
      case "gallery":
        return setImageLink(
          "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/gallery.png"
        );
      case "list":
        return setImageLink(
          "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/building-blocks/list.png"
        );
      default:
        return "";
    }
  }, [currentImage]);

  return (
    <Container>
      <Heading className="mr-40">
        <img
          alt="img"
          src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png"
        />
        <span>Powerful building blocks</span>
      </Heading>
      <Main>
        <Shuffle />
        <div className="text-left">
          <h3 className="font-bold text-lg mt-3 ">
            Visualize, filter & sort any way you want
          </h3>
          <p>
            Show only tasks assigned to you, or items marked as urgent. Break
          </p>
          <p>
            down any project in the way that’s most helpful to you.
            <br />
            <br />
          </p>
        </div>
        <Image>
          <img src={imageLink} alt="img" />
        </Image>
        <Buttons>
          {/* <Button style={currentImage==='board'?ACTIVE:INACTIVE} onClick={()=>setCurrentImage('board')}>Board</Button> */}
          <Button
            style={currentImage === "table" ? ACTIVE : INACTIVE}
            onClick={() => setCurrentImage("table")}
          >
            Table
          </Button>
          <Button
            style={currentImage === "timeline" ? ACTIVE : INACTIVE}
            onClick={() => setCurrentImage("timeline")}
          >
            Timeline
          </Button>
          <Button
            style={currentImage === "calendar" ? ACTIVE : INACTIVE}
            onClick={() => setCurrentImage("calendar")}
          >
            Calendar
          </Button>
          <Button
            style={currentImage === "gallery" ? ACTIVE : INACTIVE}
            onClick={() => setCurrentImage("gallery")}
          >
            Gallery
          </Button>
          <Button
            style={currentImage === "list" ? ACTIVE : INACTIVE}
            onClick={() => setCurrentImage("list")}
          >
            List
          </Button>
        </Buttons>
      </Main>
    </Container>
  );
}

function Shuffle() {
  return (
    <div>
      <svg
        x="0"
        y="0"
        viewBox="0 0 128 128"
        style={{
          enableBackground: "new 0 0 128 128",
          width: "25px",
          marginBottom: "5px",
        }}
      >
        <g id="x33_1_1">
          <path
            stroke-width="5"
            stroke="blue"
            d="m102.6 80.6 12.9 11.3H91.2c-11.8 0-19.6-13.7-28.1-28.2 8.5-14.6 16.3-28.3 28.1-28.3h24.9l-13.6 11.8 4.6 4.3 20.7-18.9-20.8-19-4.9 3.4 14.1 12.8h-25c-14 0-22.6 14.1-31.2 28.8-8.7-14.8-18.7-28.8-34.6-28.8H3.9v5.7H25c14.5 0 23.5 13.7 32 28.3C48.5 78.3 39.5 92 25 92H3.9v5.7h21.5c15.9 0 25.9-14 34.6-28.7 8.5 14.7 17.1 28.7 31.1 28.7h25.8l-14.8 13.5 4.9 3.4 20.8-19.1-20.7-19.1-4.5 4.2z"
            id="icon_10_"
          />
        </g>
      </svg>
    </div>
  );
}

export default Home;