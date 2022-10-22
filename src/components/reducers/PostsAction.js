import { POSTS_FETCHED, POST_OPENED, USERS_FETCHED, POST_FETCHED } from "./ActionTypes";

export const getPostsAction = (posts) => {
    return {
        type: POSTS_FETCHED,
        payload: posts,
    }
}

export const getUsersAction = (author) => {
    return {
        type: USERS_FETCHED,
        payload: author,
    }
}

export const getSinglePostAction = (post) => {
    return {
        type: POST_FETCHED,
        payload: post,
    }
}

export const openPostAction = (state) => {
    return {
        type: POST_OPENED,
        payload: state,
    }
}