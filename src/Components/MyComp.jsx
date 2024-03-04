import React from "react";

const MyComp = ({ number, fruit }) => {
  return (
    <>
      <div className="my_comp">My first Comp</div>
      <h1>The value of num in MyComp is: {number}</h1>
      <h1>The value of fruit in MyComp is: {fruit}</h1>
    </>
  );
};

export default MyComp;
