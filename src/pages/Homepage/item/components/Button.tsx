import styled from "styled-components";

const Button = styled.button`
  background-color: unset;
  border: none;
  font-weight: bold;
  font-size: 20px;
  position: relative;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    transition: all 0.3s ease-in-out;
    height: 2px;
    width: 0;
    background-color: black;
    left: 0;
    bottom: -3px;
  }

  &:hover::after {
    width: 100%;
  }
`

export default Button;