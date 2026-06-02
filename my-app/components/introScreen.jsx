export default function IntroScreen({ onStart }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-10 px-8">
            <p className="text-xs tracking-widest uppercase text-stone-600 mb-10">A probability experiment</p>
            <h1 className="font-light text-5xl md:text-7xl leading-tight text-stone-100 mb-5 text-center max-w-2xl">What are the odds you'd be {''} <em className="italic text-orange-200">you</em>
            <br />right now?</h1>

            <p className="text-sm text-stone-600 leading-relaxed font-light max-w-sm mb-14">20 cards. Each one narrows the odds. Answer a few simple questions about your life and see how likely it is that you, as you are right now, would have existed at different points in history.</p>
            
            <button onClick={onStart} className="px-12 py-4 text-xs tracking-widest uppercase bg-stone-100 text-stone-950 hover:bg-white transition-all duration-200">Find out →</button>
            </div>
        )
    }