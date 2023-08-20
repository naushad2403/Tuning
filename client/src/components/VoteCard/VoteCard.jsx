// components/Card.js
import React from "react";
import styles from "./votecard.module.css"; // Import the CSS module

const VoteCard = ({ message, upCount, downCount, onUp, onDown }) => {
  return (
    <div className={styles.card}>
      <div className={styles.message}>{message}</div>
      <div className={styles.counts}>
        <button className={styles.upButton} onClick={onUp}>
          👍
        </button>
        <span className={styles.upCount}>{upCount}</span>
        <button className={styles.downButton} onClick={onDown}>
          👎
        </button>
        <span className={styles.downCount}>{downCount}</span>
      </div>
    </div>
  );
};

export default VoteCard;
