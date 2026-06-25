import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <p>© 2026 SkillPath</p>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </footer>
  );
}

export default Footer;