import styled from "styled-components"

const NumberSelecter = ({error, setError, selectedNumber, setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6]
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setError("")
  }

  return (
    <NumberSelecterContainer>
        <p className="error">{error}</p>
        <div className="flex">
            {arrNumber.map((value, i) =>(<Box isSelected={value == selectedNumber} key={i} onClick={()=> numberSelectorHandler(value)}>{value}</Box>))}
        </div>
        <p>Select Number</p>
    </NumberSelecterContainer>
  )
}

export default NumberSelecter

const NumberSelecterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 18px;
    }
    p{
        font-size: 16px;
        font-weight: 600;
    }

    .error{
        color: red;
        font-size: 12px;
        font-weight: 400;
    }
`

const Box = styled.div`
    height: 50px;
    width: 50px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 20px;
    font-weight: 600;
    background-color: ${(props)=>(props.isSelected ? "black" : "white")};
    color: ${(props)=>(!props.isSelected ? "black" : "white")};
`