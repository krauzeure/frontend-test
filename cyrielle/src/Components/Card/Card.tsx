import React from 'react'
import '../../css/style.css'

import { useState } from 'react'

export default function Card(props: {image: string, alt: string}) {

    const [isHidden, setIsHidden] = useState(true)

    const returnCard = () => {
        setIsHidden(false);
    }

  return (
    <div className={`card-container ${props.alt}`} onClick={returnCard}>
        <div className={isHidden ? `card-cover ${props.alt}` : `card-cover-shown ${props.alt}`}></div>
        <img src={props.image} alt={props.alt} />
    </div>
  )
}
