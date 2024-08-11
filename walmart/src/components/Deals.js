import React from "react";
import costume from "../assets/costume.jpg";
// import jacket from "../assets/jacket.jpg";
// import jacket2 from "../assets/2.jpg";
// import jacket3 from "../assets/3.jpg";
import Card from "./Card";

const Deals = (props) => {
  // const cards = [
  //   { photo: costume, title: "Costume", price: "$17" },
  //   { photo: jacket, title: "Costume", price: "$17" },
  //   { photo: jacket2, title: "Costume", price: "$17" },
  //   { photo: jacket3, title: "Costume", price: "$17" },
  //   { photo: costume, title: "Costume", price: "$17" },
  //   { photo: jacket, title: "Costume", price: "$17" },
  //   { photo: jacket2, title: "Costume", price: "$17" },
  //   { photo: jacket3, title: "Costume", price: "$17" },
  //   { photo: costume, title: "Costume", price: "$17" },
  //   { photo: jacket, title: "Costume", price: "$17" },
  //   { photo: jacket2, title: "Costume", price: "$17" },
  //   { photo: jacket3, title: "Costume", price: "$17" },
  //   { photo: costume, title: "Costume", price: "$17" },
  //   { photo: jacket, title: "Costume", price: "$17" },
  //   { photo: jacket2, title: "Costume", price: "$17" },
  // ];
  const cards = props.cards;
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 md:w-max xl:w-[70vw]      gap-4 mt-4 mx-auto">
        {cards.length ? cards.map((card) => {
          return (
            <Card
              photo={costume}
              title={card.prod_name}
              price={card.price}
            />
          );
        }) : <h1>Loading...</h1>}
      </div>
    </div>
  );
};

export default Deals;
