import styled from "styled-components"

export const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  background: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;

  &:hover{
    box-shadow: 0px 0px 15px black;
    transition: 0.3s background ease-in;
  }
`
export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  border: none;
  border: 1px solid black;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s background ease-in;

  &:hover{
    box-shadow: 0px 0px 15px black;
    transition: 0.3s background ease-in;
  }
`