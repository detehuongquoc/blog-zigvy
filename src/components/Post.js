import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComment, commentSelector } from "../store/reducers/commentSlice";
import { getAllUser, userSelector } from "../store/reducers/userSlice";
const Post = ({ title, body, id, userId }) => {
  const commentAll = useSelector(commentSelector);
  const Users = useSelector(userSelector);
  const comments = commentAll.filter((comment) => {
    return comment.postId == id;
  });
  const users = Users.find((user) => {
    return user.id == userId;
  });
  console.log(users);
  return (
    <div class="col-sm-6 col-12 post-custom">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <div className="infor-post">
            <p>author : {users && users.name}</p>
            <p>Creat At : 27/04/2000</p>
          </div>
          <p class="card-text">{body}</p>
          <p className="wrap-comment">
            <a
              class="btn btn-primary button-modify"
              data-bs-toggle="collapse"
              href={`#b${id}`}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              {comments.length} Comment
            </a>
          </p>
          <div class="collapse" id={`b${id}`}>
            {comments.map((comment) => (
              <>
                <div class="card card-body wrap-card-body">
                  <div className="card-body-custom">
                    <div className="content-comment">
                      <ion-icon name="person-circle-outline"></ion-icon>
                      <h5>{comment.name}</h5>
                    </div>
                    <p>{comment.body}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
