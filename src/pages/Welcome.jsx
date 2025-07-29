import { Link } from "react-router-dom";

function Welcome() {
  const roomA = 123;
  const roomB = 69;
  const roomC = 9999;

  return (
    <div>
      <h3>Welcome</h3>
      <ul>
        <li>
          <Link to={`/dashboard/room/${roomA}`}>Room {roomA}</Link>
        </li>
        <li>
          <Link to={`/dashboard/room/${roomB}`}>Room {roomB}</Link>
        </li>
        <li>
          <Link to={`/dashboard/room/${roomC}`}>Room {roomC}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Welcome;
