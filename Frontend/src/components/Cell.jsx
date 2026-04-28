export default function Cell({ color, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        w-full h-full
        cursor-pointer
        transition-all duration-200
        hover:scale-105
        active:scale-95
      "
      style={{ backgroundColor: color }}
    />
  )
}