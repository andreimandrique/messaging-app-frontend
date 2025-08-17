import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { socket } from "../socket";
import LogoutButton from "../components/logoutButton.jsx";
import useVerify from "../hooks/useVerify";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
  const token = localStorage.getItem("token");
  const verify = useVerify(token);

  let username = null;

  if (token) {
    const decoded = jwtDecode(token);
    username = decoded.username;
  } else {
    username = "default";
  }

  useEffect(() => {
    verify();

    if (!token) {
      return;
    }

    socket.auth = { token };
    socket.connect();

    const handleConnectError = (error) => {
      console.error(error.message);
      socket.disconnect();
    };

    socket.on("connect_error", handleConnectError);

    return () => {
      socket.off("connect_error", handleConnectError);
      socket.disconnect();
    };
  }, [token, verify]);

  return (
    <div>
      <h1>Dashboard {username}</h1>
      <LogoutButton />
      <Outlet />
    </div>
  );
}

export default Dashboard;
