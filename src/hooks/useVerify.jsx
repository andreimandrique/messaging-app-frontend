import { useNavigate } from "react-router-dom";

function useVerify(token) {
  const navigate = useNavigate();

  async function verify() {
    try {
      const res = await fetch("http://localhost:3000/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return verify;
}

export default useVerify;
