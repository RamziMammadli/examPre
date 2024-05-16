import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";
import ProductCard from "../../components/productCard/ProductCard";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  }, []);

  const addToBasket = (item) => {
    axios.post("http://localhost:3000/basket", item).then((res) => {
      console.log(res.data);
    });
  };

  const addToWish = (item) => {
    axios.post("http://localhost:3000/wishlist", item).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 25,
        }}
      >
        <h1>Featured Products</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {data &&
            data.map((item) => (
              <ProductCard
                item={item}
                sebeteAt={() => addToBasket(item)}
                favori={() => addToWish(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
