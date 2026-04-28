import Block from "../models/Block.js";

export default function initGridSocket(io) {
  io.on("connection", (socket) => {
    console.log("⚡ User connected:", socket.id);

    const user = {
      id: socket.id,
      color: generateColor(),
    };

    // Send full grid
    socket.emit("init_grid", Block.getAll());

    // Handle claim
    socket.on("claim_tile", ({ tileId }) => {
      const updated = Block.claim(tileId, user);

      if (!updated) {
        socket.emit("tile_error", {
          message: "❌ This tile is already claimed!",
        });
        return;
      }

      io.emit("tile_updated", {
        tileId: updated.id,
        color: updated.color,
      });
    });

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });
}

// helper
function generateColor() {
  return `hsl(${Math.random() * 360}, 70%, 60%)`;
}