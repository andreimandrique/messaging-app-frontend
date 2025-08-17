import { useState } from "react";

function useRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, confirmPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setError("");
        setSuccess(data.message);
      } else {
        console.error(data);
        setSuccess("");
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
    confirmPassword,
    setConfirmPassword,
    error,
    success,
    handleRegister,
  };
}

export default useRegister;
