import { useState } from 'react'
import { Button } from '../components/btn'
import { Counter } from '../components/counter'
import './App.css'

function App() {
  const [num, EventNum] = useState(0)

  let incrementNum = () => {
      if (true) {
          EventNum(Number(num) + 1)
      }
  };
  
  let decrementNum = () => {
      if (num>0) {
          EventNum(Number(num) - 1)
      }
      else (alert("o numero n pode ser menor q zero"))
  };

  let handleChange = (e) => {
      EventNum(e.target.value) 
      // evita a desgraça de bugs caso garantindo que o valor seja tratado como número.
  }


  return (
    <>
      <Button onclick={decrementNum} texto="-"></Button>
      <Counter num={num} handler={handleChange}></Counter>
      <Button onclick={incrementNum} texto="+"></Button>
    </>
  )
}

export default App
