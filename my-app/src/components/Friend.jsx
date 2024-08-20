import { Link, useParams } from "react-router-dom";
import { FriendsAPI } from "../api";

export const Friend = () => {
  const { id } = useParams();
  const Friend = FriendsAPI.get(parseInt(id, 10));
  if (!Friend) {
    return <div>Sorry, but the Friend was not found</div>;
  }
  return (
    <div className="card">
      <h1>
        {Friend.name}(#{Friend.number})
      </h1>
      <h2>Age: {Friend.wins}</h2>
      <Link to="/friends">Back</Link>
    </div>
  );
};
