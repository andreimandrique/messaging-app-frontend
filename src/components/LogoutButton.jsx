import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return <button onClick={handleLogout}>Log Out</button>;
}

export default LogoutButton;
