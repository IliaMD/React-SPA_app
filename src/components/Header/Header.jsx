import React from "react";
import styles from "./Header.module.css";
import bucket from "../../assets/img/Bucket.png";
import { Link } from "react-router-dom";

export const Header = ({ count, amount }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.menu}>Наша продукция</h1>
      <div className={styles.bucket}>
        <p className={styles.bucketSum}>
          {amount} товара <br /> на сумму {count} р
        </p>
        <Link to="/bucket">
          <img className={styles.cart} src={bucket} alt="Корзина" />
        </Link>
      </div>
    </div>
  );
};
