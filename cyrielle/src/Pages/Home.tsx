import React from 'react'
import GameBoard from '../Components/GameBoard/GameBoard'
import Timer from '../Components/Timer/Timer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '../index'
import { CardType } from '../Types/types'

import '../css/style.css'

export default function Home() {

  const dispatch = useDispatch();

  const {status} = useSelector<RootState, {status: string}>(state => ({
    ...state.gameStatusReducer
  }))
  const {finished} = useSelector<RootState, {finished: boolean}>(state =>({
    ...state.gameBoardReducer
}))

useEffect(() => {
  if(finished === true) {
    dispatch({
      type: "WON"
    })
  }
}, [finished])

  const startTimer = () => {
    dispatch({
      type: "STARTGAME"
    })
  }

  return (
    <main>
        <section><h1>Bienvenue sur le jeu Memory</h1>
        <div className="explanation">
            <p>Cliquez sur "Démarrer" et trouvez tous les duos de cartes en moins de 2 minutes pour gagner !</p>
            <button onClick={startTimer}>Démarrer</button>
        </div></section>
        <Timer />
        {status === "ongoing" && <GameBoard />}
        {status === "lost" && <div>Votre temps est écoulé ! Cliquez sur "Démarrer" pour relancer une partie.</div>}
        {status === "won" && <div>Félicitations 🙌 ! Cliquez sur "Démarrer" pour relancer une partie.</div>}
    </main>
  )
}
