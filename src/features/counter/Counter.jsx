import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, showimages , incrementByAmount } from './CounterSlice'

export function Counter() {
  const count = useSelector((state) => state.counterz.value)
  const image = useSelector((state) => state.counterz.image)
  const dispatch = useDispatch()

  return (
    <div>
      <div className=' flex gap-7'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button onClick={ () => dispatch(showimages()) }> 
        show images
        </button>

        {image}

        <button onClick={ () => dispatch(incrementByAmount(10)) }>
 increment by an amount
        </button>

       <h1>   {count} </h1>
      </div>
    </div>
  )
}