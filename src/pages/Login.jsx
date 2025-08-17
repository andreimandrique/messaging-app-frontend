import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

function Login() {
  const { username, setUsername, password, setPassword, error, handleLogin } =
    useLogin();

  return (
    <div>
      <h1>Login</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/register"}>Register Now</Link>
        </li>
      </ul>
      {error && <p className="error-text">{error}</p>}
      <form>
        <label htmlFor="username">
          <p>Username:</p>
          <input
            autoComplete="username"
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input
            autoComplete="current-password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <div>
          <button onClick={handleLogin}>Log In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
