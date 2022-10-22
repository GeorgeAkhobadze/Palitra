
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUsers } from "../../API";
import { getPostsAction, getUsersAction } from "../../reducers/PostsAction";
import Pagination from "./Pagination";
import Post from "./Post";






const PostsCatalog = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [myData, setMydata] = useState()
    const [postsPerPage, setPostsPerPage] = useState(20)
    const dispatch = useDispatch()

    useEffect(() => {
        getPosts().then((res) => dispatch(getPostsAction(res.data)))
        getUsers().then((res) => dispatch(getUsersAction(res.data)))
    }, [dispatch])

    const posts = useSelector(
      (state) => state?.postList
    );

    const users = useSelector(
      (state) => state?.usersList
    )

  
   useEffect(() => {
    const arrry = []
    for (let i = 0; i < posts?.length; i++) {
      users?.map(item => {
        if(item?.id === posts[i]?.userId){
          arrry.push(item)
        }
      }
       )
    }
    setMydata(arrry)
   } , [dispatch, users, posts])


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = posts?.slice(firstPostIndex, lastPostIndex)
    const changeCurrentPage = (page) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    console.log('currentPosts',currentPosts)
    console.log('myData', myData)
    return(
      <>
          <div className="posts__catalog">
          {currentPosts?.map((post, i) => (
            <Post
            key = {i}
            title = {post.title}
            author = {post.userId}
            description = {post.body}
            getPostId = {post.id}
            user = {myData?.filter((user) => user.id === post?.userId)[0]?.name ?? ''}
            />
          ))}
        </div>
        <Pagination totalPosts={posts?.length} postsPerPage={postsPerPage} changeCurrentPage={changeCurrentPage}/> 
      </>

    )
}

export default PostsCatalog;