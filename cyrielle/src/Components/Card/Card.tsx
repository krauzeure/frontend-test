import React from 'react'
import '../../css/style.css'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../..'

export default function Card(props: {image: string, alt: string}) {

    const [isHidden, setIsHidden] = useState(true)

    const {cardNames} = useSelector<RootState, {cardNames: string[]}>(state => ({
        ...state.cardsShownReducer
      }))
      const dispatch = useDispatch();

    const returnCard = (e: any) => {
        setIsHidden(false);
        let classes = e.target.className
        let name = classes.split(" ")[1]
        dispatch({
            type: "FIRSTCARD",
            payload: name
        })
        console.log(cardNames)
    }

  return (
    <div className={`card-container ${props.alt}`} onClick={returnCard}>
        <div className={isHidden ? `card-cover ${props.alt}` : `card-cover-shown ${props.alt}`}></div>
        <img src={props.image} alt={props.alt} />
    </div>
  )
}
