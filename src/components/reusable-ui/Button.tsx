import styled from "styled-components";

type ButtonType = {
  type?: "reset" | "button" | "submit";
  label: string;
};

export default function Button({ type = "submit", label }: ButtonType) {
  return <ButtonStyled type={type}>{label}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background-color: #ff6b6b;;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff4a4a;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
