import useLogin from "../hooks/useLogin";

function Login() {
  const { username, setUsername, password, setPassword, error, handleLogin } =
    useLogin();

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
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
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
