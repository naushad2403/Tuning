import React from "react";
import styles from "./CommentBox.module.css";
import Button from "../Button/Button";

const CommentBox = ({ onSubmit, comment, onCommentChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
  };

  return (
    <div className={styles.commentBox}>
      <textarea
        className={styles.textarea}
        placeholder="Write your change ..."
        value={comment}
        onChange={onCommentChange}
        maxLength={250}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default CommentBox;
