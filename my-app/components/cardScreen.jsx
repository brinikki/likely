import StandardCard from './standardcard'
import ToggleCard from './togglecard'
import AgeCard from './agecard'
import TravelCard from './travelcard'
import ProgressBar from './progressbar'
import OddsBar from './oddsbar'

export default function CardScreen({ cards, currentIndex, onNext, onBack, onChoice }) {
    const card = cards[currentIndex]

    function renderCard() {
        if (card.type === 'toggle') return <ToggleCard card={card} index={currentIndex} total={cards.length} onChoice={onChoice}/>
        if (card.type === 'age') return <AgeCard index={currentIndex} total={cards.length}/>
        if (card.type === 'travel') return <TravelCard index={currentIndex} total={cards.length}/>
        return <StandardCard card={card} index={currentIndex} total={cards.length}/>
    }

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-between p-10 pt-8">
            <ProgressBar total={cards.length} current={currentIndex}/>

            <div className="flex-1 flex items-center justify-center w-full max-w-2xl mx-auto">
                {renderCard()}
            </div>

            <div className="flex w-full flex-col items-center gap-4">
                <OddsBar odds={card.odds}/>
                <div className="flex gap-4">
                    <button onClick={onBack} className="px-8 py-3 text-xs tracking-widest uppercase border border-stone-800 text-stone-600 hover::text-stone-100 transition-all duration-200"> ← Back</button>
                    <button onClick={onNext} className="px-8 py-3 text-xs tracking-widest uppercase border border-stone-100 text-stone-950 hover:bg-white transition-all duration-200">{currentIndex === cards.length - 1 ? 'See My Odds ->' : 'Next →'}</button>
                </div>
            </div>
        </div>
    )
}