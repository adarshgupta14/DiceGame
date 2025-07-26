import styled from "styled-components"

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
    text-align: center;
    max-width: 200px;
    h1{
        font-size: 50px;
        font-weight: 600;
        line-height:40px;
    }
    p{
        font-size: 18px;
        font-weight: 500;
    }
`