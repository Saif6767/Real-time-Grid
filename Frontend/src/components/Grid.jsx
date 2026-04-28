import Cell from "./Cell"

export default function Grid({ tiles, onTileClick }) {
  return (
    <div className="
      w-full max-w-[90vw] sm:max-w-[500px]
      aspect-square
      bg-white/5 backdrop-blur-lg
      border border-white/10
      p-2 sm:p-3
      rounded-2xl shadow-2xl
    ">
      <div
        className="grid w-full h-full gap-[2px]"
        style={{
          gridTemplateColumns: "repeat(20, 1fr)",
          gridTemplateRows: "repeat(20, 1fr)"
        }}
      >
        {tiles.map((tile) => (
          <Cell
            key={tile.id}
            color={tile.color}
            onClick={() => onTileClick(tile.id)}
          />
        ))}
      </div>
    </div>
  )
}