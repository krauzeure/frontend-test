import React from 'react'
import '../../css/style.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../index'
import { useEffect } from 'react'

export default function Timer() {

  const dispatch = useDispatch();
  const {progress} = useSelector<RootState, {progress: number}>(state => ({
    ...state.gameStatusReducer
  }))

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({
        type: "TIME"
      })
    }, 2000);
    return () => clearInterval(timer);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <div className='progress-bar-container'>
      <div 
      className='progress-bar-inside'
      style={{width: `calc(${progress}%)`}}></div>
    </div>
  )
}
