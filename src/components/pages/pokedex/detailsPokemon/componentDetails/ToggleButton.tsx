import styled from "styled-components";
import { PiPokerChip, PiPokerChipFill } from "react-icons/pi";
import { ToggleButtonType } from "./typeComponents";

export default function ToggleButton({ isRegular, onClick }: ToggleButtonType) {
  return (
    <ToggleButtonStyled onClick={onClick}>
      {isRegular ? <PiPokerChip /> : <PiPokerChipFill />}
    </ToggleButtonStyled>
  );
}

const ToggleButtonStyled = styled.button`
  background-color: #ffcc01;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;
