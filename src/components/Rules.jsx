import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play</h2>
        <ul className="text">
            <li>Select any number.</li>
            <li>Click on dice to roll.</li>
            <li>If selected number is equal to the number appeared on dice, you'll get the same point.</li>
            <li>If your gues was wrong then 2 points will be deducted.</li>
        </ul>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
    background-color: #fbf1f1;
    padding: 14px;
    h2{
        font-size: 18px;
        font-weight: bold;
    }
    .text{
        margin-top: 5px;
        font-size: 15px;
    }
`