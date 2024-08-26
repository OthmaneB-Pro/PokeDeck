import styled from "styled-components";

type LabelNameType = {
  label: string;
};

export default function LabelName({ label }: LabelNameType) {
  return <LabelNameStyled>{label}</LabelNameStyled>;
}

const LabelNameStyled = styled.label`
  display: flex;
  align-self: flex-start;
  margin-bottom: 10px;
  color: #555;
  font-size: 1rem;
  font-weight: 500;
`;
