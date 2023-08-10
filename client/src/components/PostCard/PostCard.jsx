"use client";

import React, { useState } from "react";
import "./postcard.css";

const PostCard = ({ content, upvotes, downvotes }) => {
  const [currentUpvotes, setCurrentUpvotes] = useState(upvotes);
  const [currentDownvotes, setCurrentDownvotes] = useState(downvotes);

  const handleUpvote = () => {
    setCurrentUpvotes(currentUpvotes + 1);
  };

  const handleDownvote = () => {
    setCurrentDownvotes(currentDownvotes + 1);
  };

  return (
    <div className="post-card">
      <p className="post-content">{content}</p>
      <div className="vote-buttons">
        <button className="vote-button upvote-button" onClick={handleUpvote}>
          ⬆️
        </button>
        <span className="vote-count">{currentUpvotes}</span>
        <button
          className="vote-button downvote-button"
          onClick={handleDownvote}
        >
          ⬇️
        </button>
        <span className="vote-count">{currentDownvotes}</span>
      </div>
    </div>
  );
};

export default PostCard;
