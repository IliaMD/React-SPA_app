import React from "react";
import styles from "./BucketCard.module.css";
import remove from "../../assets/img/delete.png";

export const BucketCard = ({ img, title, price, onDeleteCard }) => {
  return (
    <div className={styles.bucketCard}>
      <div className={styles.leftSideCard}>
        <img className={styles.leftSideImg} src={img} alt="" />
        <h3 className={styles.itemTitle}>{title}</h3>
      </div>

      <div className={styles.rightSideCard}>
        <p className={styles.itemPrice}>{price} Р</p>
        <button onClick={onDeleteCard} className={styles.bucketRemove}>
          <img src={remove} alt="" />
        </button>
      </div>
    </div>
  );
};
