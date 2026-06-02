'use client'
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {CARDS} from '../../data/cards';
import StarBackground from '../../components/starBackground';
//import ProgressBar from '@/../components/progressbar';
import IntroScreen from '../../components/introScreen';
import CardScreen from '../../components/cardScreen';
import FinalScreen from '../../components/finalScreen';



export default function Page() {
  // change odds number based on toggle clicked
  const [screen, setScreen] = useState('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [choice, setChoice] = useState(null)

  function handleStart() {
    setScreen('cards')
  }

  function handleNext() {
    if (currentIndex === CARDS.length - 1) {
      setScreen('final')
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function handleBack() {
    if (currentIndex === 0) {
      setScreen('intro')
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

   function handleRestart() {
    setCurrentIndex(0)
    setChoice(null)
    setScreen('intro')  
   }

  return (
    <div className="bg-stone-950 min-h-screen p-10 flex flex-col items-center gap-30">
      <StarBackground />
      {/* <ProgressBar total={20}  current={3}/> */}
      {/* <ToggleCard card={testCard} index={6} total={20} onChoice={setChoice}/>
      <TravelCard index={5} total={20}/> */}


    <AnimatePresence mode="wait">
      {screen === 'intro' && (
        <motion.div
          key="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <IntroScreen onStart={handleStart} />
        </motion.div>
      )}

      {screen === 'cards' && (
        <motion.div
          key="cards"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <CardScreen
            cards={CARDS}
            currentIndex={currentIndex}
            onNext={handleNext}
            onBack={handleBack}
            onChoice={setChoice}
          />
        </motion.div>
      )}

      {screen === 'final' && (
        <motion.div
          key="final"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <FinalScreen onRestart={handleRestart} />
        </motion.div>
      )}
    </AnimatePresence>

      {/* <OddsBar odds={choice === 'yes' 
          ? testCard.yesOdds
          : testCard.noOdds}  */}

    </div>
  )
}

