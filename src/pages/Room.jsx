import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../socket";
import { Link } from "react-router-dom";

function Room() {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");
  const [receiveMessage, setReceiveMessage] = useState([]);

  useEffect(() => {
    socket.emit("joinRoom", roomId);

    socket.on("receiveMessage", (message, username) => {
      const messageContent = { message, username };
      setReceiveMessage((prev) => [...prev, messageContent]);
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
      <Link to={"/dashboard"}>Go back</Link>
      <br />
      <br />
      <div>
        {receiveMessage.map((messageContent, index) => (
          <p key={index}>
            <strong>{messageContent.username}</strong> {messageContent.message}
          </p>
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
