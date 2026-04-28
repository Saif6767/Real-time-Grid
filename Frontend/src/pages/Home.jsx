import { useState, useEffect } from "react"
import Grid from "../components/Grid"
import { sendTileClick, onTileUpdate, onInitGrid } from "../services/socketService"
import { onTileError } from "../services/socketService"

export default function Home() {
  const [tiles, setTiles] = useState([])

  useEffect(() => {
    onInitGrid((serverTiles) => {
      setTiles(serverTiles);
    });

    onTileUpdate(({ tileId, color }) => {
      setTiles(prev =>
        prev.map(tile =>
          tile.id === tileId ? { ...tile, color } : tile
        )
      );
    });

    onTileError((data) => {
      alert(data.message);
    });
  }, []);

  // 🔌 click backend ko bhejo
  const handleTileClick = (id) => {
    sendTileClick(id);
  };


  return (
    <div className="
      min-h-screen
      bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
      flex flex-col items-center justify-center
      px-3 sm:px-6
    ">

      <h1 className="
        text-white
        text-lg sm:text-xl md:text-2xl
        font-bold mb-4 sm:mb-6
        tracking-wide text-center
      ">
        🎯 Realtime Grid
      </h1>

      <Grid tiles={tiles} onTileClick={handleTileClick} />

    </div>
  )
}