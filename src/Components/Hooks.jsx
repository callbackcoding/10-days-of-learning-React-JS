import React, { useEffect, useRef, useState } from "react";

const Hooks = () => {
  let a = 5;
  const increment = () => {
    ++a;
    // console.log(a);
    setNum(++num);
  };

  let [num, setNum] = useState(5);
  let [name, setName] = useState("");
  let count = useRef();
  count.current = 0;
  // console.log(count.current);

  //   useEffect
  //   1. (every render, reload)
  // useEffect(() => {
  //   console.log("Changes Occured!");
  // });

  //2. (once when the website is loaded)
  //   useEffect(() => {
  //     console.log("Website loaded");
  //   }, []);

  //3. (changes in any specific state or props)
  //   useEffect(() => {
  //     console.log("Num is changed!! ");
  //   }, [num]);

  // useRef

  useEffect(() => {
    // setNum(++num);
    count.current = count.current + 1;
    // console.log("Hello loop");
  });

  return (
    <div>
      <h1>Learning Hooks</h1>
      <h2>UseState</h2>
      <p>The value of a is: {a}</p>
      {/* <p>The value of num is: {num}</p> */}
      <button onClick={() => increment()}>Increment</button>
      <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="enter value"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <p>Name: {name}</p>

      <h2>useEffect</h2>
      <h2>useRef</h2>
    </div>
  );
};

export default Hooks;

// 1. useState
// 2. useEffect
// 3. useRef
