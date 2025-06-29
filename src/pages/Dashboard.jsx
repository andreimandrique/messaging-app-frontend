import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { socket } from "../socket";

function Dashboard() {
  useEffect(() => {
    socket.connect();

    return () => socket.disconnect();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

export default Dashboard;
