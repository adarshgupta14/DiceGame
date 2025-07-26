import StartGame from "./components/StartGame"
import { useState } from "react"
import GamePlay from "./components/GamePlay"


const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  
  return (
    <>{isGameStarted ? <GamePlay toggle = {toggleGamePlay}/> : <StartGame toggle = {toggleGamePlay} />}</>
  )
}

export default App