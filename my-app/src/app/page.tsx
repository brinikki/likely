import ProgressBar from '@/../components/progressbar';
import StandardCard from '@/../components/standardcard';

const testCard = {
  title: "You exist at all",
  text: "One specific sperm out of 250 million met one specific egg. Every single one of your ancestors survived long enough to reproduce. The chain never broke — not once in 300,000 years.",
};
export default function Page() {
  return (
    <div className="bg-stone-950 min-h-screen p-10 flex flex-col items-center gap-10">
      <h1>Progress Bar Example</h1>
      <ProgressBar total={20}  current={3}/>
      <StandardCard card={testCard} title={testCard.title} text={testCard.text} total={20} index={0}/>
    </div>
  );
}

