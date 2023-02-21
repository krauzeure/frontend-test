import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../index'
import { useEffect } from 'react'

export default function Timer() {

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({
        type: "TIME"
      })
    }, 5000);
    return () => clearInterval(timer);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  const {progress} = useSelector<RootState, {progress: number}>(state => ({
    ...state.gameStatusReducer
  }))

  console.log(progress)

  return (
    <div>Timer</div>
  )
}
