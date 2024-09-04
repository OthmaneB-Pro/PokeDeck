import styled from "styled-components";

type CloseButtonType = {
    onClick : () => void;
    label : string;
}

export default function CloseButton({onClick, label} : CloseButtonType) {
  return (
    <CloseButtonStyled onClick={onClick}>{label}</CloseButtonStyled>
  )
}

const CloseButtonStyled = styled.button`
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #ff4a4a;
  }
`;
