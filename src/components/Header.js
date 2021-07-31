import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://logoart.vn/blog/wp-content/uploads/2010/03/Thiet-ke-logo-dang-cap-sang-tao6.png"
          alt="Italian Trulli"
        />
      </Link>
      <h1>BLOG</h1>
      <div className="wrap-user-header">
        <img
          className="avatar-any"
          src="https://xaydunghoanghung.com/wp-content/uploads/2020/11/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg"
          alt="Italian Trulli"
        />
        <h1>Ducdete</h1>
      </div>
    </div>
  );
}

export default Header;
