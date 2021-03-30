import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        <strong>To do list app</strong> by{" "}
        <a href="https://benjaminlo.io">Benjamin Lo</a>. The source code is
        licensed
        <a href="http://opensource.org/licenses/mit-license.php"> MIT. </a>
        <br />
        <Link to="/about">About this app</Link>
      </p>
    </footer>
  );
};

export default Footer;
