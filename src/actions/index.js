export const FETCH_POSTS = "FETCH_POSTS";
export const DELETE_POST = "DELETE_POST";


export function fetchPosts() {
  return {
    type: FETCH_POSTS
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  };
}