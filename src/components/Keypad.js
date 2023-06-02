// Code Keypad Component Here
import React from 'react'

function Keypad() {
    function keyHandler(event) {
        console.log('Entering password...')
    }
  return (
    <form>
        <input type="password" onChange={keyHandler} />
    </form>
  )
}

export default Keypad