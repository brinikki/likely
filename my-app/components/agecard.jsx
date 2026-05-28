'use client'

import { useState } from 'react';

export default function AgeCard({index, total}) {
    const [age, setAge] = useState(28);

    function getInsight(age) {
        if (age < 20) return {
            insight: "You're not young. You yourself have roughly 15 more years before being considered to have lived a full life. - by every standard that existed for most of human history",
            sub: "A thousand years ago, 2-3 of your siblings likely never made it past age 5. You are already in the top 10% of people who have ever lived in terms of age."
        }
      if (age < 35) return {
        insight: "You've already outlived what most humans could expect.",
        sub: "Life expectancy hovered around 35 for over a millennium. By the standards that defined humanity for a thousand years, you're already a success story — still breathing, still here."
        }
        if (age < 55) return {
            insight: `You are living ${Math.round(((age - 35) / 35) * 100)}% beyond the life expectancy that defined humanity for 1,000 years.`,
            sub: "Every day past 35 was borrowed time for your ancestors. You're borrowing it"
        }
        const pct = Math.min(99, Math.round(((age - 20) / 65) * 75 + 20));
        return {
           insight: "A thousand years ago, people would have asked what gods you prayed to.",
           sub: `You are outliving roughly ${pct}% of every human who ever drew breath. They'd have called you a miracle. You didn't earn this — antibiotics and clean water did it for you.`
        }
    }

    const { insight, sub } = getInsight(age);

    return (
        <div className="gap-3 flex flex-col items-center text-center max-w-xl w-full ">
            <p className="text-xs tracking-widest uppercase text-stone-600 mb-4">
                {String(index + 1).padStart(2, '0')} / {total} - Make it yours
            </p>
            <h2 className="font-light text-4xl md:text-5xl leading-tight text-stone-100 mb-3">
                How old are<em className='italic text-orange-200'> you</em> ?
            </h2>
            <div className="text-8xl font-light text-orange-200 leading-none my-4">
                {age}
            </div>

            <p className="text-xs tracking-widest uppercase text-orange-200 mb-6">years old</p>

            <input type="range" min="13" max="100" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full mb-8 cursor-pointer" />

            <p className='text-lg font-light italic text-stone-100 leading-relaxed max-w-md mb-3 transition-all duration-300'>{insight}</p>
          

            <p className='text-sm text-stone-600 max-w-md transition-all duration-300'>{sub}</p>
        </div> 
    );
}