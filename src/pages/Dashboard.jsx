import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { socket } from "../socket";
import LogoutButton from "../components/logoutButton";
import { jwtDecode } from "jwt-decode";

function Dashboard() {
  const token = localStorage.getItem("token");
  const decode = jwtDecode(token);

  useEffect(() => {
    if (!token) return;
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
  }, [token]);

  return (
    <div>
      <h1>Dashboard {decode.username}</h1>
      <LogoutButton />
      <Outlet />
    </div>
  );
}

export default Dashboard;
