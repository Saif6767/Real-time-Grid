import { socket } from "../hooks/useSocket"

export const sendTileClick = (tileId) => {
  socket.emit("claim_tile", { tileId })
}

export const onTileUpdate = (callback) => {
  socket.on("tile_updated", callback)
}

export const onInitGrid = (callback) => {
  socket.on("init_grid", callback)
}

export const onTileError = (callback) => {
  socket.on("tile_error", callback);
};