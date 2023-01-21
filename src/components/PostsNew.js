import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from '../actions';

const PostsNew = (props) => {
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    // Prevents form from doing default action of submitting (refreshing) 
    e.preventDefault();

    dispatch(createPost({
      // id: 4,
      title,
      categories: categories.split(' '),
      content
    }));

    // Redirect to index page
    props.history.push('/')
  }
  
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>Title of Post</label>
        <input 
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Categories</label>
        <input 
          type="text"
          className="form-control"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Post Content</label>
        <input 
          type="text"
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  )
}

export default PostsNew;