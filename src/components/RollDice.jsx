import styled from "styled-components"

const RollDice = ({currentDice, rollDice}) => {
  return (
    <DiceContainer>
        <div className="dice" onClick={rollDice}>
            <img src={`/images/dice/dice${currentDice}.png`} alt="dice1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
)
}

export default RollDice

const DiceContainer = styled.div`
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor: pointer;
    }
     .dice img{
        width: 200px;
     }

    p{
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 0.05px;
    }
`