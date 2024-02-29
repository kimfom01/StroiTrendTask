import { Link } from "react-router-dom";
import "./home.css";
import { Base } from "./Base";

export const Home = () => {
  return (
    <Base>
      <h1>Welcome to StroiTrend Reports</h1>
      <div className="home-links">
        <button>
          <Link to={{ pathname: "total-chats" }}>View Total Chats Report</Link>
        </button>
        <button>
          <Link to={{ pathname: "duration" }}>View Duration Reports</Link>
        </button>
        <button>
          <Link to={{ pathname: "ratings" }}>View Ratings Reports</Link>
        </button>
        <button>
          <Link to={{ pathname: "response-time" }}>
            View Response Time Reports{" "}
          </Link>
        </button>
        <button>
          <Link to={{ pathname: "tags" }}>View Tags Reports</Link>
        </button>
      </div>
    </Base>
  );
};
