import "./App.css";
import Block2 from "./component/Block2";
import Block6 from "./component/Block6";
import Block3 from "./component/Block3";
import BlockFourCard from "./component/BlockFourCard";
import Footer from "./component/Footer";
import Block7 from "./component/Block7";
import Block8 from "./component/Block8";

import Navbar from "./Navbar";
import Block5Card from "./component/Block5Card";
import FrontBanner from "./component/FrontBanner";
import MyComponent from "./component/MyComponent";

function App() {
  return (
    <>
      <Navbar />
      <FrontBanner />
      <MyComponent />

      <div className="App">
        <Block2></Block2>
        <Block3></Block3>
        <BlockFourCard></BlockFourCard>
        <Block5Card />
        <Block6></Block6>
        {/* <Block7></Block7> */}
        <Block8></Block8>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;