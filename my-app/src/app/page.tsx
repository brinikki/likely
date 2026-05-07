'use client'
import { useState } from 'react';
import StarBackground from '@/../components/starBackground';
import ProgressBar from '@/../components/progressbar';
//import StandardCard from '@/../components/standardcard';
import OddsBar from '@/../components/oddsbar';
import ToggleCard from '@/../components/togglecard';


const testCard = {
  title: "Electricity was on all day",
  baseText: "Rolling blackouts are a daily reality in Nigeria, Pakistan, and South Africa. Most of the world plans their day around power availability.",
  question: "Does your electricity stay on reliably, all day?",
  yesText: "You probably charged your phone twice today and didn't once think about whether the power would stay on. That background reliability — invisible to you — is a daily luxury billions don't have.",
  noText: "You know the calculation — when to charge what, which appliances to run when, how to plan around the outages. That awareness is its own kind of tax that the always-on world never has to pay.",
  yesOdds: "1 in 68,260,000,000,000,000,000,000",
  noOdds: "1 in 426,625,000,000,000,000,000,000"
}


export default function Page() {
  // change odds number based on toggle clicked
  const [choice, setChoice] = useState(null)
  return (
    <div className="bg-stone-950 min-h-screen p-10 flex flex-col items-center gap-30">
      <StarBackground />
  {/* <h1>Progress Bar Example</h1>  */}
      <ProgressBar total={20}  current={3}/>
      <ToggleCard card={testCard} index={6} total={20} onChoice={setChoice}/>
      {/* <StandardCard card={testCard} title={testCard.title} text={testCard.text} total={20} index={0}/> */}
      {/* <OddsBar odds={testCard.odds}/> */}
      <OddsBar odds={choice === 'yes' 
          ? testCard.yesOdds
          : testCard.noOdds} 
/>
    </div>
  );
}

