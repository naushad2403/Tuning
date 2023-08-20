"use client";
import React, { useState } from "react";
import "./postcard.css"; // Make sure to have your CSS file
import VoteCard from "../VoteCard/VoteCard";
import Button from "../Button/Button";
import CommentBox from "../CommentBox/CommentBox";

const PostCard = ({ username, image, content, upvotes, downvotes }) => {
  const [currentUpvotes, setCurrentUpvotes] = useState(upvotes);
  const [currentDownvotes, setCurrentDownvotes] = useState(downvotes);

  const [comment, addComment] = useState("");

  const handleUpvote = () => {
    setCurrentUpvotes(currentUpvotes + 1);
  };

  const handleDownvote = () => {
    setCurrentDownvotes(currentDownvotes + 1);
  };

  const onCommentChange = (e) => {
    addComment(e.target.value);
  };

  return (
    <div className="post-card">
      <div className="user-info">
        <img src={image} alt={`${username}'s profile`} className="user-image" />
        <span className="username">{username}</span>
      </div>

      {[1, 2, 3].map((item, index) => {
        return (
          <VoteCard
            message={content}
            upCount={currentUpvotes}
            downCount={currentDownvotes}
            onUp={handleUpvote}
            onDown={handleDownvote}
          />
        );
      })}
      <CommentBox comment={comment} onCommentChange={onCommentChange} />
    </div>
  );
};

export default PostCard;
