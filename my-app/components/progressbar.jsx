export default function ProgressBar({ total, current }) {
  return (
    <div className="flex gap-1 w-full">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-px rounded-sm transition-all duration-500 ${
            i < current
              ? 'bg-amber-600'
              : i === current
              ? 'bg-stone-100'
              : 'bg-stone-800'
          }`}
        />
      ))}
    </div>
  )
}