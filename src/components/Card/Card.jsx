import React from "react";
import styles from "./Card.module.css";
import plus from "../../assets/img/plus.png";

export const Card = ({ url, title, text, price, gramm, onCardClick }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardPerview} src={url} alt="" />
      <div className={styles.description}>
        <h2 className={styles.cardTitle}> {title}</h2>
        <p className={styles.cardText}>{text}</p>
      </div>
      <div className={styles.cardPrice}>
        <p className={styles.cardAmount}>
          {price} p / {gramm}
        </p>
        <button onClick={onCardClick} className={styles.add}>
          <img clasName={styles.plus} src={plus} alt="" />
        </button>
      </div>
    </div>
  );
};
