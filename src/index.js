import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from 'redux-promise';

import PostsIndex from "./components/PostIndex";
import PostsShow from "./components/PostsShow";
import PostsNew from "./components/PostsNew";

import Header from "./components/Header";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Header>
        <Switch>
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/posts/:id' component={PostsShow} />
          <Route path='/' component={PostsIndex} />
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
