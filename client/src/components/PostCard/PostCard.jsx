"use client";
import React, { useState } from "react";
import "./postcard.css";
import VoteCard from "../VoteCard/VoteCard";
import CommentBox from "../CommentBox/CommentBox";
import { useSelector } from "react-redux";
import { userInfo } from "@/services/whoami";

const PostCard = ({ name, image, issues, setModal }) => {
  const [comment, addComment] = useState("");

  const { data: user } = useSelector(userInfo);

  const onCommentChange = (e) => {
    addComment(e.target.value);
  };

  return (
    <div className="post-card">
      <div className="user-info">
        <img
          src={"/assets/placeholder.svg"}
          alt={`${name}'s profile`}
          className="user-image"
        />
        <span className="username">{name}</span>
      </div>

      {issues.map((item, index) => {
        return (
          <VoteCard {...item} key={index} setModal={setModal} user={user} />
        );
      })}
      {user && (
        <CommentBox comment={comment} onCommentChange={onCommentChange} />
      )}
    </div>
  );
};

export default PostCard;
