import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getSinglePostAction,
  openPostAction,
} from "../../reducers/PostsAction";

const Post = ({ title, author, description, getPostId, user }) => {
  const dispatch = useDispatch();
  const openUrl = () => {
    dispatch(getSinglePostAction(getPostId));
    dispatch(openPostAction(true));
  };

  return (
    <div className="post__container">
      <article>
        <p className="post__title">{title}</p>
        <p className="post__author">{user}</p>
        <p className="post__description">{description}</p>
        <button className="read-more-btn" onClick={() => openUrl()}>
          Read More →
        </button>
      </article>
    </div>
  );
};

export default Post;
