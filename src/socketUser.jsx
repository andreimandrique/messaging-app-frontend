import { io } from "socket.io-client";

export const socket = io("http://localhost:3000/user", {
  autoConnect: false,
  auth: {
    token: "exampleToken",
  },
});
