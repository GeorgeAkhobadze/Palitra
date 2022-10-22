import axios from "axios";

export const getPosts = async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return result;
};

export const getUsers = async () => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  return result;
};

export const getSinglePost = async (id) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return result;
};

export const getPostComments = async () => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/comments`
  );
  return result;
};

export const getSingleUser = async (id) => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return result;
};
