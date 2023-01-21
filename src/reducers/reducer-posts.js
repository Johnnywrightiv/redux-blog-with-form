import { FETCH_POSTS, DELETE_POST } from "../actions";

const defaultState = [
  { "id": 1,
            "title": "Starting 2021 Right", 
            "categories": ["health, finances"], 
            "content": "I'm stating 2021 off the right way!"
          },
          { "id": 2,
            "title": "Learn to Code", 
            "categories": ["career"], 
            "content": "I'm learning to code!"
          },
          { "id": 3,
            "title": "Get Rich Quick!", 
            "categories": ["finances"], 
            "content": "Save your money!"
          }
]

const postReducer = function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return state;
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
}

export default postReducer;