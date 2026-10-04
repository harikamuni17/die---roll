import React from 'react'
import './Die.css'
const diceSymbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
const Die = ({num}) => {
  console.log(num);
  return (
    <> 
        <div>Dice</div>
        <div className="die">{diceSymbols[num-1]}</div>
    </>
  )
}

export default Die