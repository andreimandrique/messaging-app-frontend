import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/example");
      } else {
        console.error(data);
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    error,
    handleLogin,
  };
}

export default useLogin;
