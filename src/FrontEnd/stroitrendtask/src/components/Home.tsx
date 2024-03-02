import { Link } from "react-router-dom";
import "./Home.css";
import { Base } from "./Base";

export const Home = () => {
  return (
    <Base>
      <h1>Welcome to StroiTrend Reports</h1>
      <div className="home-links">
        <Link to={{ pathname: "total-chats" }}>
          <button>View Total Chats Report</button>
        </Link>
        <Link to={{ pathname: "duration" }}>
          <button>View Duration Reports</button>
        </Link>
        <Link to={{ pathname: "ratings" }}>
          <button>View Ratings Reports</button>
        </Link>
        <Link to={{ pathname: "response-time" }}>
          <button>View Response Time Reports</button>
        </Link>
        <Link to={{ pathname: "tags" }}>
          <button>View Tags Reports</button>
        </Link>
      </div>
    </Base>
  );
};
