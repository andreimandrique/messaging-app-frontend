import { socket } from "../socketUser";
import { useEffect, useState } from "react";

function Example() {
  const [message, setMessage] = useState("");
  const [receiveMessage, setReceiveMessage] = useState([]);

  useEffect(() => {
    socket.connect();

    socket.on("message", (msg) => {
      setReceiveMessage((prev) => [...prev, msg]);
    });

    socket.on("connect_error", (error) => {
      console.error(error.message);
    });

    return () => {
      socket.off("message");
      socket.off("connect_error");
      socket.disconnect();
    };
  }, []);

  function sendMessage() {
    if (message.trim() !== "") {
      socket.emit("message", message);
      setMessage("");
    }
  }

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        {receiveMessage.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      <input
        placeholder="Type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Example;
