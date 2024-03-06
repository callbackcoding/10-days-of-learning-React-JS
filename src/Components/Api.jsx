import React, { useState } from "react";

const Api = () => {
  let [data, setData] = useState([]);
  const getApi = () => {
    console.log("Get api called!");
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((a) => {
        setData(a.products);
      });
  };

  const postApi = () => {
    console.log("Post api called!");
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
        price: 1200,
        desc: "This is desc",
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
      <button
        onClick={() => {
          getApi();
        }}
      >
        GET API
      </button>
      <button
        onClick={() => {
          postApi();
        }}
      >
        POST API
      </button>
      {data.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })}
    </div>
  );
};

export default Api;
