import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <nav className="nav-link">
        <ul>
          <li>
            <Link to={{ pathname: "/" }}>Home</Link>
          </li>
          <li>
            <Link to={{ pathname: "/total-chats" }}>Total Chats</Link>
          </li>
          <li>
            <Link to={{ pathname: "/duration" }}>Duration</Link>
          </li>
          <li>
            <Link to={{ pathname: "/ratings" }}>Ratings</Link>
          </li>
          <li>
            <Link to={{ pathname: "/response-time" }}>Response Time</Link>
          </li>
          <li>
            <Link to={{ pathname: "/tags" }}>Tags</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
