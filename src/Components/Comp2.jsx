import React from "react";
import "../styles/Comp2.css";
const Comp2 = (props) => {
  const mystyles = {
    width: "200px",
    height: "200px",
  };
  return (
    <div>
      <h1 className="heading">Hello!!</h1>
      <p>The value of num is: {props.number}</p>
      <p>The value of fruit is: {props.fruit}</p>
      <p style={{ fontSize: "25px", color: "orange" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        impedit a facere fuga labore! Rerum eum reiciendis animi sunt. Numquam
        asperiores voluptate molestiae, omnis beatae dolorem ipsum facere a.
        Consequatur.
      </p>
      <img
        style={mystyles}
        src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
};

export default Comp2;
