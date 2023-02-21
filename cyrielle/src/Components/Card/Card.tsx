import React from 'react'
import '../../css/style.css'

export default function Card(props: {image: string, alt: string, hidden: boolean, returnCard:(id: number, cardName: string) => void, number: number, disabled: boolean}) {

    const returnCard = () => {
      !props.disabled && props.returnCard(props.number, props.alt);
    }

  return (
    <div className={`card-container ${props.alt}`} onClick={returnCard}>
        <div className={props.hidden ? `card-cover ${props.alt}` : `card-cover-shown ${props.alt}`}></div>
        <img src={props.image} alt={props.alt} />
    </div>
  )
}
