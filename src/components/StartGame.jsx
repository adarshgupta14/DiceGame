import styled from "styled-components"
import { Button } from "../styled/Button"
import { TbHexagonLetterA } from "react-icons/tb";

const StartGame = ({toggle}) => {
  return <Home>
    <a href="https://github.com/adarshgupta14"><TbHexagonLetterA style={{fontSize: '50px', marginLeft: "40px", marginTop: "5px"}}/></a>
    <div className="container">
      <img src="/images/dice.png" alt="" />
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </div>
  </Home>
}

export default StartGame

const Home = styled.div`
  a{
    color: black;
    text-decoration: none;
  }

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px - 1em);

    img{
      width: 750px;
    }

    .content {
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: end;
      h1{
        font-size: 90px;
        line-height: 100px;
        white-space: nowrap;
      }
    }
  }
`