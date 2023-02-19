import React from 'react'
import '../../css/style.css'

export default function Card(props: {image: string, alt: string}) {
  return (
    <div className={`card-container ${props.alt}`} >
        <div className="card-cover"></div>
        <img src={props.image} alt={props.alt} />
    </div>
  )
}
