import React from "react";
import Featured from "../components/UI/Featured";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Discounted from "../components/UI/Discounted";
import Explore from "../components/UI/Explore";


const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
