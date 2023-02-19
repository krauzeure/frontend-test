import React from 'react'
import GameBoard from '../Components/GameBoard/GameBoard'
import Timer from '../Components/Timer/Timer'

import '../css/style.css'

export default function Home() {
  return (
    <main>
        <section><h1>Bienvenue sur le jeu Memory</h1>
        <div className="explanation">
            <p>Cliquez sur "Démarrer" et trouver tous les duos de cartes en moins de 2 minutes pour gagner !</p>
            <button>Démarrer</button>
        </div></section>
        <Timer />
        <GameBoard />
    </main>
  )
}
