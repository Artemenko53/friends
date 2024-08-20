import { Link } from "react-router-dom";

export const Header = () => (
  <header>
    <nav>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
      </ul>
    </nav>
  </header>
);
