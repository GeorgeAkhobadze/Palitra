import { USERS_FETCHED, POSTS_FETCHED, POST_OPENED, POST_FETCHED } from "./ActionTypes";

const initState = {
    postList: [],
    usersList: [],
    postOpened: false,
    singlePost: 0,    
}

export const PostsReducer = (state = initState, action) => {
   switch (action.type) {
    case POSTS_FETCHED:
        return {
            ...state,
            postList: action.payload
        }
    case POST_OPENED:
        return {
            ...state,
            postOpened: action.payload
        }
    case USERS_FETCHED:
        return {
            ...state,
            usersList: action.payload,
        }
    case POST_FETCHED:
        return {
            ...state,
            singlePost: action.payload,
        }
   }
}