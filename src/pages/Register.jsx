import useRegister from "../hooks/useRegister";

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
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
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
          <button onClick={handleRegister}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
