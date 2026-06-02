export default function FinalScreen({ onRestart }) {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 max-w-3xl mx-auto gap-5">

            <p className="text-xs tracking-widest uppercase text-stone-600 mb-10">Your odds you'd be here, living this exact Life</p>
            <p className="text-sm text-orange-200 font-light max-w-lg leading-relaxed mb-10">About 1 in {Math.round(1 / 0.00000000000000000000000000000001).toLocaleString()}</p>

            <h1 className="font-light text-5xl md:text-7xl lg:text-8xl text-stone-100 mb-10 max-w-4xl">You won.</h1>
            
            <p className="text-sm text-stone-600 leading-relaxed font-light max-w-md mb-4">Out of all the possible combinations of <em className="italic text-orange-200">genes,</em> <em className="italic text-lime-400">parents,</em> <em className="italic text-pink-400">historical events,</em> and <em className="italic text-orange-400">sheer randomness</em> that could have led to any number of different people being born, you are here. AND you were born at the {''} <em className="italic text-amber-400">right time</em>, <em className="italic text-lime-400">right place</em>, in the right configuration of human history.So many things had to go right for you to be here, and yet here you are. It's a miracle. You didn't earn this — your parents didn't earn this — it's just the luck of the draw. But it's also a reminder to make the most of this incredible gift.</p>
            <p className="text-sm text-stone-600 leading-relaxed font-light max-w-md mb-14">Most humans who have lived have never experienced {''} <em className="italic text-amber-400">a single one</em> of these cards.</p>

            <p className="text-xs text-stone-800 italic max-w-sm leading-relaxed mb-14">There are 100 billion stars in the Milky Way. Pick one at random — 
        then pick a single grain of sand on a single beach on Earth. 
        The odds you'd be living this exact life are smaller than that.</p>

            <button onClick={onRestart} className="px-12 py-4 text-xs tracking-widest uppercase border border-stone-800 bg-stone-100 text-stone-950 hover:border-stone-950 hover:bg-stone-950 hover:text-stone-100 transition-all duration-200">Play again →</button>
        </div>

    )
}