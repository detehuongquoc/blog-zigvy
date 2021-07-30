import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Posts />
      </div>
    </Router>
  );
}

export default App;
