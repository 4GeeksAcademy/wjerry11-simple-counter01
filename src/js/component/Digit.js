import React from "react";
const Digit = (props) => {
  return (
    <>
      <h1>{props.count % 10}</h1>
    </>
  );
};

export default Digit;
