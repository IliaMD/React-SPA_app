import React from "react";
import { Header, Card } from "../components";
import { cards } from "../utils/mock";
import { addNewCard } from "../store/Card";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const handleAddToBucket = (img, title, price) => {
    dispatch(addNewCard({ img, title, price }));
  };

  const products = useSelector((state) => state.cards);

  let amount = 0;

  const priceArr = products.map((product) => {
    let finalCount = 0;
    amount++;
    return finalCount + product.price;
  });

  const count = priceArr.reduce((a, b) => a + b, 0);

  return (
    <div className="homePage">
      <Header count={count} amount={amount} />
      <div className="container">
        {cards.map((card) => (
          <Card
            key={card.id}
            url={card.url}
            title={card.title}
            text={card.text}
            price={card.price}
            gramm={card.gramm}
            onCardClick={() =>
              handleAddToBucket(card.url, card.title, card.price)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
