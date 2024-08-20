import { Link } from "react-router-dom";
import { FriendsAPI } from "../api";

export function Friends() {
  return (
    <div>
      <ul className="list friends">
        {FriendsAPI.all().map((p) => (
          <li key={p.number}>
            <Link to={`/friends/${p.number}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
