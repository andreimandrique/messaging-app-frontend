import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { socket } from "../socket";
import LogoutButton from "../components/logoutButton";

function Dashboard() {
  useEffect(() => {
    const token = localStorage.getItem("token");
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
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <LogoutButton />
      <Outlet />
    </div>
  );
}

export default Dashboard;
