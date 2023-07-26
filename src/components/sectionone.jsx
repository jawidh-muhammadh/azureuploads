import React from 'react'
import { useSelector  } from 'react-redux'


const Sectionone = () => {
  // const count = useSelector((state) => state.counter.value)
  const image = useSelector((state) => state.counterz.image)
  return (
    <div className=' h-48 bg-slate-400'>
       {image[0]}
        </div>
  )
}

export default Sectionone