import React from "react";
import { BucketCard } from "../components";
import back from "../assets/img/back.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../store/Card";

function Bucket() {
  const products = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const handleDeleteCard = (id) => {
    dispatch(deleteCard({ id }));
  };

  const priceArr = products.map((product) => {
    let finalCount = 0;
    return finalCount + product.price;
  });

  const count = priceArr.reduce((a, b) => a + b, 0);

  return (
    <div className="bucketPage">
      <div className="bucketTitle">
        <Link to="/">
          <button className="buttonBack">
            <img src={back} alt="" />
          </button>
        </Link>
        <h2>Корзина с выбранными товарами</h2>
      </div>

      <div className="goods">
        {products.map((product) => (
          <BucketCard
            key={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            onDeleteCard={() => handleDeleteCard(product.id)}
          />
        ))}
      </div>

      <div className="bucketDown">
        <div className="bucketSum">
          <p>Заказ на сумму:</p>
          <p className="bucketResult">{count} p</p>
        </div>

        <button className="bucketPurchase"> Оформить заказ</button>
      </div>
    </div>
  );
}

export default Bucket;
