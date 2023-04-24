import React from 'react'
import Walls from './Walls'
import Fenster from './Fenster'

function House() {
  return (
    <group>
      <Walls />
      <Fenster xVal={0.63680315} />
      <Fenster xVal={-0.862098} />
    </group>
  )
}

export default House