import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../Card/Card'
import { images } from '../../Data/images'
import { v4 as uuidv4 } from 'uuid'
import '../../css/style.css'

// Creating a function to shuffle our array
const shuffleArray = (array: { id: number; name: string; image: string; }[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Creating an array with 2 instances of each picture
const allImages = [...images];
// Shuffling the array
shuffleArray(allImages);
let shuffled = allImages;

export default function GameBoard() {

    const [boardUpdate, setBoardUpdate] = useState(true);
    const [turnedCards, setTurnedCards] = useState<number[]>([]);
    const [wrongGuess, setWrongGuess] = useState(0)

    useEffect(() => {
        const interval = setTimeout(() => {
            console.log("on cache après erreur")
            if(turnedCards.length > 1) {
                shuffled[turnedCards[0]].isHidden = true;
                shuffled[turnedCards[1]].isHidden = true;
                setTurnedCards([])
            }
        }, 1000);
        return () => clearTimeout(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [wrongGuess]);

    const checkPair = () => {
        if(turnedCards.length === 2) {
            if(shuffled[turnedCards[0]].name === shuffled[turnedCards[1]].name) {
                console.log("paire trouvée")
            } else {
                setWrongGuess(wrongGuess + 1)
                setBoardUpdate(!boardUpdate)
            }
        }
    }

    const cardClick = (cardNumber: number, cardName: string) => {
        shuffled[cardNumber].isHidden = false;
        turnedCards.push(cardNumber);
        setBoardUpdate(!boardUpdate)
        checkPair();
    }

  return (
    <ul className="game-container">
        {shuffled.map((item, index) => (
          <Card image={item.image} alt={item.name} key={uuidv4()} hidden={item.isHidden} returnCard={cardClick} number={index} test={boardUpdate}/>
        ))}
    </ul>
  )
}
