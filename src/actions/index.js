import axios from "axios";
import { useCallback } from "react";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";
export const CREATE_POST = "CREATE_POST";

const ROOT_URL = "https://parsity-blog-server.herokuapp.com";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}`);

  request.then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts`, values);

  request.then(() => callback());

  return {
    type: CREATE_POST,
    payload: request,
  };
}