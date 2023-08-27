// components/Card.js
import React, { useState } from "react";
import styles from "./votecard.module.css"; // Import the CSS module

const VoteCard = ({ content, upvote, downvote, setModal, user }) => {
  const [currentUpvotes, setCurrentUpvotes] = useState(upvote);
  const [currentDownvotes, setCurrentDownvotes] = useState(downvote);

  const onUp = () => {
    if (!user) {
      setModal(true);
      return;
    }
    setCurrentUpvotes(currentUpvotes + 1);
  };

  const onDown = () => {
    if (!user) {
      setModal(true);
      return;
    }
    setCurrentDownvotes(currentDownvotes + 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.message}>{content}</div>
      <div className={styles.counts}>
        <button className={styles.upButton} onClick={onUp}>
          👍
        </button>
        <span className={styles.upCount}>{currentUpvotes}</span>
        <button className={styles.downButton} onClick={onDown}>
          👎
        </button>
        <span className={styles.downCount}>{currentDownvotes}</span>
      </div>
    </div>
  );
};

export default VoteCard;
