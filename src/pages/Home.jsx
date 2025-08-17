import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Realtime Messaging App</h1>
      <ul>
        <li>
          <Link to={"/login"}>Log In</Link>
        </li>
        <li>
          <Link to={"/register"}>Register Now</Link>
        </li>
      </ul>
      <h2>Demo Account 1</h2>
      <ul>
        <li>
          <b>Username:</b> cat
        </li>
        <li>
          <b>Password:</b> 123
        </li>
      </ul>
      <h2>Demo Account 2</h2>
      <ul>
        <li>
          <b>Username:</b> dog
        </li>
        <li>
          <b>Password:</b> 123
        </li>
      </ul>
    </div>
  );
}
export default Home;
