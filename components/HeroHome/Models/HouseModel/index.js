import React from 'react'
import Walls from './Walls'
import Fenster from './Fenster'
import Door from './Door'
import Roof from './Roof'
import Stairs from './Stairs'

function House() {
  return (
    <group>
      <Walls />
      <Fenster xVal={0.63680315} />
      <Fenster xVal={-0.862098} />
      <Door />
      <Roof />
      <Stairs />
    </group>
  )
}

export default House