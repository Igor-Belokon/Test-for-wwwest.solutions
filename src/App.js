import React from "react";

import "../src/components/style.css";

import Login from "../src/components/login/login";

import Home from "../src/components/main/home";

import News from "../src/components/news/news";
import Profile from "../src/components/prof/prof";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import createStore from "./store";
const { store } = createStore();

function App() {
  return (
    <div className="app-style">
      <Provider store={store}>
        <Router>
          <>
            <News></News>
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/news" component={News} />
            <Route path="/login" component={Login} />
          </>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
