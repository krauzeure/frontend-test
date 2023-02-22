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
export const shuffleArray = (array: CardType[]) => {
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

    const [cardTurns, setCardTurns] = useState(0)

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

    useEffect(() => {
        if(turnedCards.length === 2) {
            dispatch({
                type: "DISABLEBOARD"
            })
            const interval = setTimeout(() => {
                    checkPair();
                    dispatch({
                        type: "ABLEBOARD"
                    })
            }, 1000);
            return () => clearTimeout(interval);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [cardTurns]);

    const checkPair = () => {
        dispatch({
            type: "CHECKPAIRS"
        })
    }

    const cardClick = (cardNumber: number, cardName: string) => {
        dispatch({
            type: "TURNCARD",
            payload: cardNumber
        })
        setCardTurns(cardTurns + 1)
    }

  return (
    <ul className="game-container">
        {gameBoard.map((item, index) => (
          <Card image={item.image} alt={item.name} key={uuidv4()} hidden={item.isHidden} returnCard={cardClick} number={index} disabled={item.isDisabled}/>
        ))}
    </ul>
  )
}
