import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PostsIndex from "./components/PostIndex";
import PostsShow from "./components/PostsShow";

import Header from "./components/Header";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <Header>
        <Switch>
          <Route path='/posts/:id' component={PostsShow} />
          <Route path='/' component={PostsIndex} />
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);