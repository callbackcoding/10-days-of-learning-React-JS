import React from "react";

const JavascriptComp = () => {
  const myStyle = {
    color: "red",
  };
  // variable
  const num = 5;
  // console.log(num);
  //   array
  var myArr = ["Apple", "Orange", "Mango", "Banana", "Grapes"];

  //object
  let myObj = {
    name: "Callback coding",
    age: 12,
    platform: "Youtube",
  };

  // console.log(myArr);

  var flag = true;
  var a = "kchbhi";
  return (
    <div>
      <h1>JavascriptComp</h1>
      {/* variable */}
      <p>Number is : {num}</p>

      {/* array  */}
      <p>{myArr[0]}</p>

      {myArr.map((item, index) => {
        return (
          <p style={myStyle} key={index}>
            {item}
          </p>
        );
      })}
      {/* object  */}
      <p>{myObj.age}</p>

      {Object.keys(myObj).map((item, index) => {
        return (
          <p key={index}>
            {item} : {myObj[item]}
          </p>
        );
      })}

      {/* if else  */}

      {flag ? <p>Flag is true</p> : <p>Flag is false</p>}

      {/* if else if  */}

      {a === "A" ? (
        <p>Value is A</p>
      ) : a === "B" ? (
        <p>Value is B </p>
      ) : (
        <p>Value is nothing</p>
      )}
    </div>
  );
};

export default JavascriptComp;
