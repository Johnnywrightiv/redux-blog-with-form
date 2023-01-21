import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostsShow = (props) => {
  const post = useSelector(({ posts }) => {
    return posts.find((post) => {
      return post.id === parseInt(props.match.params.id)
    })
  });
  
  return (
    <div>
      <Link to="/">Back To Index</Link>
      <br></br>
      <br></br>
      <button
        className="btn btn-danger pull-xs-right"
        // onClick={onDeleteClick}
      >
        Delete Post
      </button>
      <br></br>
      <br></br>
      <h3>{post.title}</h3>
      {/* <h6><strong>Categories:</strong> {renderCategories()}</h6> */}
      <p>{post.content}</p>
    </div>
  );
};

export default PostsShow;