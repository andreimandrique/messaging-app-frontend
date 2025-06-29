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
          <Link to={`/dashboard/room/${roomA}`}>Room A</Link>
        </li>
        <li>
          <Link to={`/dashboard/room/${roomB}`}>Room B</Link>
        </li>
        <li>
          <Link to={`/dashboard/room/${roomC}`}>Room C</Link>
        </li>
      </ul>
    </div>
  );
}

export default Welcome;
