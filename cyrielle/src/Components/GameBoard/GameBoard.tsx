import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import { images } from '../../Data/images'
import { v4 as uuidv4 } from 'uuid'
import '../../css/style.css'
import { RootState } from '../../index'
import { CardType } from '../../Types/types'

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

    // const [turnedCards, setTurnedCards] = useState<number[]>([]);
    const [wrongGuess, setWrongGuess] = useState(0)

    const dispatch = useDispatch();

    const {gameBoard, turnedCards} = useSelector<RootState, { gameBoard: CardType[], turnedCards: number[]}>(state =>({
        ...state.gameBoardReducer
    }))

    useEffect(() => {
        dispatch({
            type: "DRAWBOARD",
            payload: shuffled
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     const interval = setTimeout(() => {
    //         console.log(gameBoard)
    //         if(turnedCards.length > 1) {
    //             shuffled[turnedCards[0]].isHidden = true;
    //             shuffled[turnedCards[1]].isHidden = true;
    //             setTurnedCards([])
    //         }
    //     }, 1000);
    //     return () => clearTimeout(interval);
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, [wrongGuess]);

    useEffect(() => {
        const interval = setTimeout(() => {
            console.log("wrong")
        }, 1000);
        return () => clearTimeout(interval);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [wrongGuess]);

    const checkPair = () => {
        dispatch({
            type: "CHECKPAIRS"
        })
        // if(turnedCards.length === 2) {
        //     if(shuffled[turnedCards[0]].name === shuffled[turnedCards[1]].name) {
        //         const newBoard = shuffled.map(item => item)
        //         // newBoard[turnedCards[0]].isHidden = false;
        //         // newBoard[turnedCards[1]].isHidden = false;
        //         dispatch({
        //             type: "CORRECTGUESS",
        //             payload: newBoard
        //         })
        //     } else {
        //         setWrongGuess(wrongGuess + 1)
        //     }
        // }
    }

    console.log("GAMEBOARD", gameBoard)

    const cardClick = (cardNumber: number, cardName: string) => {
        // shuffled[cardNumber].isHidden = false;
        dispatch({
            type: "TURNCARD",
            payload: cardNumber
        })
        // turnedCards.push(cardNumber);
        checkPair();
    }

  return (
    <ul className="game-container">
        {gameBoard.map((item, index) => (
          //@ts-ignore
          <Card image={item.image} alt={item.name} key={uuidv4()} hidden={item.isHidden} returnCard={cardClick} number={index} />
        ))}
    </ul>
  )
}
