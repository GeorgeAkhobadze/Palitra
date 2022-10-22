import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import PostsCatalog from "./PostsCatalog/PostsCatalog"
import { Navigate, useHistory, useNavigate } from "react-router"
import PostPage from "./PostPage/PostPage";
import { openPostAction } from "../reducers/PostsAction";




const Main = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const postOpened = useSelector(
        (state) => state?.postOpened
      );

    const singlePostId = useSelector(
        (state) => state?.singlePost
    )

    console.log(singlePostId)

    const handleNavigation = () => {
        navigate(`/posts/${singlePostId}`)
        dispatch(openPostAction(false))
    } 


    return(
        <>
        {postOpened ?  
        handleNavigation() : <PostsCatalog/>
        }        
        </>

    )
}

export default Main;