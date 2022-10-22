import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { getPostComments, getSinglePost, getSingleUser } from "../../API";
import Loader from "../../loader/Loader";
import useScrollDetector from "./useScrollDetector";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPostdata, setCurrentPostData] = useState({});
  const [currentPostComments, setCurrentPostComments] = useState([]);
  const [nextPostComments, setNextPostComments] = useState([]);
  const [nextPostdata, setNextPostData] = useState({});
  const [user, setUser] = useState({});
  const [nextUser, setNextUser] = useState({});
  const { isNextPost } = useScrollDetector();

  useEffect(() => {
    getSinglePost(id).then((res) => setCurrentPostData(res.data));
    getPostComments().then((res) => {
      setCurrentPostComments(res.data.filter((post) => post.postId == id));
      setNextPostComments(
        res.data.filter((post) => post.postId == Number(id) + 1)
      );
    });
  }, []);

  useEffect(() => {
    if (Object.keys(currentPostdata).length > 0) {
      getSingleUser(currentPostdata.userId).then((res) => setUser(res?.data));
    }
  }, [currentPostdata]);

  console.log(nextPostComments);

  useEffect(() => {
    if (isNextPost) {
      try {
        getSinglePost(Number(id) + 1).then((res) => setNextPostData(res.data));
      } catch (e) {
        console.log("error", e);
      }
    }
  }, [isNextPost]);

  useEffect(() => {
    if (isNextPost && currentPostdata.id < 100) {
      navigate(`/posts/${Number(id) + 1}`, { replace: true });
    }

    if (!isNextPost && Object.keys(nextUser).length > 0) {
      navigate(`/posts/${currentPostdata.id}`, { replace: true });
    }
  }, [isNextPost]);

  useEffect(() => {
    if (Object.keys(nextPostdata).length > 0) {
      getSingleUser(nextPostdata.userId).then((res) => setNextUser(res?.data));
    }
  }, [nextPostdata]);

  const goToAuthor = (id) => {
    navigate(`/author/${id}`);
  };

  return (
    <>
      {Object.keys(user).length > 0 ? (
        <section id="current-post" className="postpage__container">
          <div className="postpage__title">{currentPostdata.title}</div>
          <div
            className="postpage__author"
            onClick={() => goToAuthor(currentPostdata.userId)}
          >
            {user.name}
            <br />
            {user.email}
          </div>
          <div className="postpage__description">{currentPostdata.body}</div>
          <div className="postpage__comments-container">
            <p className="postpage__comments-header">Comments</p>
            {currentPostComments.map((comment) => {
              return (
                <div className="postpage__comment">
                  <p className="postpage__comment-user">{comment.email}</p>
                  <p className="postpage__comment-description">
                    {comment.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <Loader />
      )}

      {isNextPost && Object.keys(nextUser).length > 0 && (
        <section className="postpage__container">
          <div className="postpage__title">{nextPostdata.title}</div>
          <div className="postpage__author">{nextUser.name}</div>
          <div className="postpage__description">{nextPostdata.body}</div>
          <div>{nextUser.name}</div>
          <div className="postpage__comments-container">
            <p className="postpage__comments-header">Comments</p>
            {nextPostComments.map((comment) => {
              return (
                <div className="postpage__comment">
                  <p className="postpage__comment-user">{comment.email}</p>
                  <p className="postpage__comment-description">
                    {comment.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default PostPage;
