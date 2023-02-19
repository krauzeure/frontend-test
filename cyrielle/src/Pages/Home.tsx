import React from 'react'
import GameBoard from '../Components/GameBoard/GameBoard'
import Timer from '../Components/Timer/Timer'

export default function Home() {
  return (
    <main>
        <section>Explication du jeu</section>
        <Timer />
        <GameBoard />
    </main>
  )
}
