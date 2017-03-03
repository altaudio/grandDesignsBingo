import React from 'react'
import Menu from './menu'
import Cell from './cell'
import { randText } from './randomText.js'

export default () => {
  return (
    <div>
      <Menu />
      <div style={{ width: '800', marginLeft: 'auto', marginRight: 'auto' }}>
        <Cell text={randText[0]} />
        <Cell text={randText[1]} />
        <Cell text={randText[2]} />
        <Cell text={randText[3]} />
        <Cell text={randText[4]} />
        <Cell text={randText[5]} />
        <Cell text={randText[6]} />
        <Cell text={randText[7]} />
        <Cell text={randText[8]} />

      </div>

    </div>

  )
}
