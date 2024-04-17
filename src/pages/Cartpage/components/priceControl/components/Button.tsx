import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  border: none;
  border-radius: 20px;
  width: 100%;
  height: 65px;
  color: white;
  font-weight: 500;
  font-size: 17px;
  position: relative;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    width: 0px;
    height: 2px;
    background-color: white;
    transition: all 0.3s ease-in-out;
    left: 65px;
    bottom: 18px;
  }

  &:hover::after {
    width: 64%;
  }
`

export default Button;