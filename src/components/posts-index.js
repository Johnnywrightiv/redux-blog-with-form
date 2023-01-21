import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../actions";

const PostsIndex = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [fetchPosts]);

  function renderPosts() {
    if (posts.length > 0) {
      return posts.map((post) => (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ));
    }
    return <div>No posts to show</div>;
  }

  return (
    <div>
      <div className="text-xs-right">
        <Link className="btn btn-primary" to="/posts/new">
          Add a Post
        </Link>
      </div>
      <br />
      <h3>Posts</h3>
      <ul className="list-group">{renderPosts()}</ul>
    </div>
  );
};

export default PostsIndex;