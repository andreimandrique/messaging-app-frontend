import { Link } from "react-router-dom";
import useHome from "../hooks/useHome";

function Home() {
  const { message, loading, error } = useHome();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <p className="error-text">{error}</p>;

  return (
    <div>
      <h1>{message}</h1>
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
      <h2>Special Note</h2>
      <p>
        I did not apply data persistance to the message but showcase the
        realtime features. To test this properly open the 2 account between 2
        different browser example Google Chrome and Microsoft Edge join one room
        and start chatting.
      </p>
    </div>
  );
}
export default Home;
