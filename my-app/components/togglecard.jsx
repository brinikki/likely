'use client'

import { useState } from 'react'

export default function ToggleCard({ card, index, total, onChoice }) {
  const [choice, setChoice] = useState(null)

  return (
    <div className="flex flex-col items-center text-center max-w-xl w-full">

      <p className="text-xs tracking-widest uppercase text-stone-600 mb-6">
        {String(index + 1).padStart(2, '0')} / {total}
      </p>

      <h2 className="font-light text-4xl md:text-5xl leading-tight text-stone-100 mb-5">
        {card.title}
      </h2>

      <p className="text-sm text-stone-500 leading-relaxed font-light max-w-md mb-6">
        {card.baseText}
      </p>

      <p className="text-xs tracking-wide text-stone-600 mb-4">
        {card.question}
      </p>

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => {setChoice('yes'); onChoice('yes')}}
          className={`px-8 py-3 text-xs tracking-widest uppercase font-medium border rounded-sm transition-all duration-200 ${
            choice === 'yes'
              ? 'bg-emerald-900 text-emerald-200 border-emerald-900'
              : 'bg-transparent text-stone-600 border-stone-800 hover:border-stone-600 hover:text-stone-100'
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => {setChoice('no'); onChoice('no')}}
          className={`px-8 py-3 text-xs tracking-widest uppercase font-medium border rounded-md transition-all duration-200 ${
            choice === 'no'
              ? 'bg-rose-950 text-rose-200 border-rose-950'
              : 'bg-transparent text-stone-600 border-stone-800 hover:border-stone-600 hover:text-stone-100'
          }`}
        >
          No
        </button>
      </div>

      <p className={`text-sm leading-relaxed font-light max-w-md min-h-16 transition-opacity duration-300 ${
        choice === null
          ? 'opacity-0'
          : choice === 'yes'
          ? 'text-emerald-600'
          : 'text-rose-400'
      }`}>
        {choice === 'yes' ? card.yesText : choice === 'no' ? card.noText : ''}
      </p>

    </div>
  )
}