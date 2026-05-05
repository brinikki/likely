export default function OddsBar({ odds }) {
    return (
        <div className="w-full border-t border-stone-800 pt-5 text-center">
        <p className="text-xs tracking-widest uppercase text-stone-700 mb-2">Your odds so far</p>
        <p className="font-serif font-light text-lg text-stone-100 tracking-wide">{odds}</p>
        </div>
)
}