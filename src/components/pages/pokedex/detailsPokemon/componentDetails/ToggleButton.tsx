import styled from "styled-components";
import { PiPokerChip, PiPokerChipFill } from "react-icons/pi";
import { ToggleButtonType } from "./typeComponents";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function ToggleButton({
  isRegular,
  onRegular,
  onHeart,
  isFavorite,
}: ToggleButtonType) {
  return (
    <ToggleButtonStyled>
      <div onClick={onRegular}>
        {isRegular ? <PiPokerChip /> : <PiPokerChipFill />}
      </div>
      <div onClick={onHeart}>{isFavorite ? <FaHeart /> : <FaRegHeart />}</div>
    </ToggleButtonStyled>
  );
}

const ToggleButtonStyled = styled.button`
  background-color: #ffcc01;
  border: none;
  width: 100px;
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
