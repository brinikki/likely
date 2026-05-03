export default function StandardCard({ card, title, text, total, index  }) {
    return (
        <div className="flex flex-col items-center text-center max-w-x1 w-full">
            <p className="text-xs tracking-widest uppercase text-stone-600 mb-6">{String(index + 1).padStart(2, '0')} /{total}</p>
            <h2 className="font-serif font-light text-5xl leading-tight text-stone-100 mb-5">{card.title}</h2>
            <p className="text-sm text-stone-300 leading-relaxed font-light max-w-md">{card.text}</p>
        </div>
    )
}