import React from 'react'
import GameBoard from '../Components/GameBoard/GameBoard'
import Timer from '../Components/Timer/Timer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '../index'

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
// eslint-disable-next-line react-hooks/exhaustive-deps
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
        {status === "ongoing" && <GameBoard />}
        {status === "ongoing" && <Timer />}
        {status === "lost" && <div className="home-over-message">Votre temps est écoulé ! Cliquez sur "Démarrer" pour relancer une partie.</div>}
        {status === "won" && <div className="home-over-message">Félicitations 🙌 ! Cliquez sur "Démarrer" pour relancer une partie.</div>}
    </main>
  )
}
