import React from 'react'
import { useState } from 'react'
import Die from '../Components/Die'
import './RollDice.css'

const RollDice = () => {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1); 
  const rollBtn = () =>{
    let num1 = Math.floor(Math.random()*6)+1;
    let num2 = Math.floor(Math.random()*6)+1;
    setDie1(num1);
    setDie2(num2);
  }
  return (
    <>
       <div className="roll-dice">

            <div className="dice-container">
                <Die num={die1}/>
                <Die num={die2}/>
            </div>

            <button className="roll-die-btn" onClick={rollBtn}>
                Roll the Dice!!
            </button>

        </div>
    </>
  )
}

export default RollDice