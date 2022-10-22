import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPosts, getSingleUser } from "../API";

const AuthorPage = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState([]);
  const [authorPosts, setAuthorPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getSingleUser(id).then((res) => setAuthor(res.data));
    getPosts().then((res) => {
      //   console.log(res.data);
      setAuthorPosts(res.data.filter((post) => post.userId == id));
    });
  }, []);

  console.log(authorPosts);

  return (
    <div className="author-page">
      <div className="author-information">
        <p className="author-name">{author?.name}</p>
        <p className="author-email">{author?.email}</p>
        <p>{author?.phone}</p>
        <p className="author-city">{author?.address?.city}</p>
        <p className="">{author?.address?.street}</p>
        <p>{author?.address?.suite}</p>
      </div>

      <div className="author__posts-container">
        <p>Posts by Author:</p>
        {authorPosts.map((post) => {
          return (
            <div
              className="author__post"
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              {post.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuthorPage;
