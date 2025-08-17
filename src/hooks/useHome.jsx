import { useEffect, useState } from "react";

function useHome() {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHome() {
      try {
        const res = await fetch(import.meta.env.VITE_BACKEND_URL);

        if (!res.ok) {
          throw new Error("error getting home message");
        }
        const data = await res.json();
        setMessage(data.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHome();
  }, []);
  return { message, loading, error };
}

export default useHome;
