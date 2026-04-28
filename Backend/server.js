import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import initGridSocket from "./src/sockets/gridSocket.js";

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// initialize sockets
initGridSocket(io);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});