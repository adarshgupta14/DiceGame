import styled from "styled-components"
import NumberSelecter from "./NumberSelecter"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"
import { HiArrowSmLeft } from "react-icons/hi";

const GamePlay = ({toggle}) => {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState()
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (max, min) => {
        return Math.floor(Math.random() * (max - min) + min)
    }
    const rollDice = () => {
        if(!selectedNumber) {
            setError("You have not selected a number")
            return 
        }
        

        const randomNumber = generateRandomNumber(1, 6)
        setCurrentDice((prev) => randomNumber)

        if(selectedNumber == randomNumber){
            setScore((prev) => prev + randomNumber)
        } else{
            setScore((prev) => prev - 2) 
        }
        setSelectedNumber(undefined)
    }

    const resetScore = () => {
        setScore(0)
    }


  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score} />
            <NumberSelecter error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        </div>
        <div className="center">
            <RollDice currentDice={currentDice} rollDice={rollDice} />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={()=> setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
            </div>
            {showRules && <Rules/>}
        </div>
        <button className="bth" onClick={toggle}><HiArrowSmLeft style={{fontSize: '15px', fontWeight: '600'}}/>Back to Home</button>
        <div className="footer">
            -Made by <a href="https://www.linkedin.com/in/adarshgupta04">@adarshgupta</a>
        </div>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
        margin: 0 10vh;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    .center{
        display: flex;
        flex-direction: column;
    }
    .bth{
        display: flex;
        gap: 2px;
        position: fixed;
        bottom: 20px;
        right: 25px;
        font-size: 12px;
        font-weight: 600;
        padding: 8px 14px;
        border: 1px solid white;
        box-shadow: 0px 0px 15px gray;
        border-radius: 30px;
        cursor: pointer;
    }
    .footer{
        position: fixed;
        bottom: 20px;
        left: 25px;
        font-size: 12px;
        font-weight: bold;
    }
    .footer a{
        text-decoration: none;
        color: purple;
    }
`