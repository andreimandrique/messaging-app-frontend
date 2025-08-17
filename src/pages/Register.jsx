import useRegister from "../hooks/useRegister";
import { Link } from "react-router-dom";

function Register() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    success,
    handleRegister,
  } = useRegister();
  return (
    <div>
      <h1>Register</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/login"}>Log In</Link>
        </li>
      </ul>
      {error && <p className="error-text">{error}</p>}
      {success && <p className="success-text">{success}</p>}
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
        <label htmlFor="confirmPassword">
          <p>Confirm Password:</p>
          <input
            autoComplete="current-password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <div>
          <button onClick={handleRegister}>Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
