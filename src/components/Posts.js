import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllpost, postSelector } from "../store/reducers/postSlice";
import { getAllComment, commentSelector } from "../store/reducers/commentSlice";
import { getAllUser } from "../store/reducers/userSlice";
import Post from "./Post";
const Posts = () => {
  const post = useSelector(postSelector);
  const commentAll = useSelector(commentSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllpost());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllComment());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <div className="row posts-modify">
      {post.map((post) => {
        const comments = commentAll.filter((coment) => {
          return coment.postId === post.id;
        });
        return (
          <Post
            title={post.title}
            body={post.body}
            key={post.id}
            id={post.id}
            comments={comments}
            userId={post.userId}
          />
        );
      })}
    </div>
  );
};

export default Posts;
