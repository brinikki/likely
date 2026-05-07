'use client'

import { useState } from 'react'

const INSIGHTS = [
  {
    max: 50,
    text: "Even staying close to home, you moved more freely in a week than most humans moved in a year. Your ancestors' entire world was the size of your neighbourhood."
  },
  {
    max: 200,
    text: "You travelled further this year than the average human did in their entire lifetime for 99% of recorded history. The 25-mile radius was the whole world."
  },
  {
    max: 500,
    text: "A journey this long would have taken your great-great-grandmother months on foot — if she survived it at all. You did it without much thought."
  },
  {
    max: 2000,
    text: "You crossed distances that would have been considered impossible for most of human history. Explorers died attempting less, and were celebrated for centuries."
  },
  {
    max: 5000,
    text: "You have moved across entire continents this year. For 299,000 years of human history no one did that in a lifetime. You did it in a year."
  },
  {
    max: 6200,
    text: "You have crossed the planet. The furthest any human ancestor travelled in their entire life, you covered in a single trip. You live in a different category of existence."
  },
]

const MAX_MILES = 7000

export default function TravelCard({ index, total }) {
  const [raw, setRaw] = useState(50)

  const miles = Math.min(Math.round(raw * raw / 500 * MAX_MILES / 500), MAX_MILES)
  const displayMiles = miles >= MAX_MILES ? '7,000+' : miles.toLocaleString()
  const pct = Math.min(100, (miles / MAX_MILES) * 100)
  const insight = INSIGHTS.find(i => miles <= i.max) || INSIGHTS[INSIGHTS.length - 1]

  const bars = [
    { label: 'You', pct, value: miles >= MAX_MILES ? '7k+ mi' : miles.toLocaleString() + ' mi', color: '#c9b88a', textColor: '#c9b88a' },
    { label: '1800s avg', pct: 5, value: '~50 mi', color: '#3d3b37', textColor: '#3d3b37' },
    { label: 'Medieval', pct: 2.5, value: '~25 mi', color: '#2e2c28', textColor: '#3d3b37' },
    { label: 'Stone age', pct: 1, value: '~10 mi', color: '#1e1c18', textColor: '#3d3b37' },
  ]

  return (
    <div className="flex flex-col items-center text-center max-w-xl w-full">

      <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">
        {String(index + 1).padStart(2, '0')} / {total} — Make it yours
      </p>

      <h2 className="font-light text-4xl md:text-5xl leading-tight text-stone-100 mb-3">
        How far did you travel <em className="italic text-amber-400">this year</em>?
      </h2>

      <p className="text-xs text-stone-600 mb-5 font-light">
        Flights, road trips, daily commutes — everything.
      </p>

      <div className="text-6xl font-light text-amber-400 leading-none mb-1">
        {displayMiles}
      </div>
      <p className="text-xs tracking-widest uppercase text-stone-600 mb-5">
        miles this year
      </p>

      <input
        type="range"
        min="0"
        max="500"
        value={raw}
        onChange={e => setRaw(Number(e.target.value))}
        className="w-full mb-6 cursor-pointer"
      />

      <div className="w-full max-w-md mb-5">
        {bars.map(b => (
          <div key={b.label} className="flex items-center gap-3 mb-3">
            <span className="text-xs w-20 text-right flex-shrink-0"
              style={{ color: b.textColor }}>
              {b.label}
            </span>
            <div className="flex-1 h-1 bg-stone-900 rounded-sm overflow-hidden">
              <div
                className="h-full rounded-sm transition-all duration-500"
                style={{ width: Math.max(1, b.pct) + '%', background: b.color }}
              />
            </div>
            <span className="text-xs w-16 text-left flex-shrink-0"
              style={{ color: b.textColor }}>
              {b.value}
            </span>
          </div>
        ))}
      </div>

      <p className="text-sm text-stone-300 leading-relaxed font-light italic max-w-md min-h-12">
        {insight.text}
      </p>

    </div>
  )
}