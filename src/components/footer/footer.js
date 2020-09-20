// @flow
import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="bottom-bar">
        With <span className="heart">♥</span> by{" "}
        <a href="http://garimasingh.me">garimasingh.me</a>
        <br />
        Template by <a href="https://www.smooper.com">smooper.com</a>
      </div>
    </footer>
  );
};

export default Footer;
