import React from "react";
import SimpleCounter from "./simpleCounter";
import propTypes from "prop-types";

//create your first component
const Home = (props) => {
  return (
    <>
      <SimpleCounter />
    </>
  );
};
Home.propTypes = {
  counter: propTypes.number,
};

export default Home;
