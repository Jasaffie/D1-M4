import Header from "./Header";
import CardPizza from "./CardPizza";
import { useState } from "react";
import { pizzas } from "./pizzas.js";

const Home = () => {
  const [data, setData] = useState(pizzas);
  const filtro = data.filter((pizza) => {
    return (
      pizza.desc.toLowerCase() ||
      pizza.img.toLowerCase() ||
      pizza.ingredients.toLowerCase() ||
      pizza.name.toLowerCase() ||
      pizza.price.toLowerCase()
    );
  });

  return (
    <>
      <Header></Header>
      <div className="products container-fluid">
        <CardPizza pizzas = {filtro}/>
      </div>
    </>
  );
};

export default Home;
