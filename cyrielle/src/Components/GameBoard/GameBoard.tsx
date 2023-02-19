import React from 'react'
import Card from '../Card/Card'
import { images } from '../../Data/images'
import { v4 as uuidv4 } from 'uuid'
import '../../css/style.css'

// Creating an array with 2 instances of each picture
const allImages = [...images, ...images];

// Creating a function to shuffle our array
const shuffleArray = (array: { id: number; name: string; image: string; }[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Shuffling the array
shuffleArray(allImages);

export default function GameBoard() {
  return (
    <ul className="game-container">
        {allImages.map(item => (
          <Card image={item.image} alt={item.name} key={uuidv4()} />
        ))}
    </ul>
  )
}
