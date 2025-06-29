import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../socket";

function Room() {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");
  const [receiveMessage, setReceiveMessage] = useState([]);

  useEffect(() => {
    socket.emit("joinRoom", roomId);

    socket.on("receiveMessage", (message) => {
      setReceiveMessage((prev) => [...prev, message]);
    });

    return () => {
      socket.emit("leaveRoom", roomId);
      socket.off("receiveMessage");
    };
  }, [roomId]);

  function sendMessage() {
    if (message.trim() !== "") {
      socket.emit("messageRoom", { roomId, message });
      setMessage("");
    }
  }

  return (
    <div>
      <h3>Room {roomId}</h3>
      <div>
        {receiveMessage.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        placeholder="type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Room;
