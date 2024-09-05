import styled from "styled-components";
import { StatsType } from "./typeComponents";

export default function Stats({ stats, height, weight }: StatsType) {
  return (
    <StatsContainer>
      <p>HP: {stats.hp}</p>
      <p>ATK: {stats.atk}</p>
      <p>DEF: {stats.def}</p>
      <p>Sp. ATK: {stats.spe_atk}</p>
      <p>Sp. DEF: {stats.spe_def}</p>
      <p>VIT: {stats.vit}</p>
      <p>Taille: {height}</p>
      <p>Poids: {weight}</p>
    </StatsContainer>
  );
}

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  p {
    flex: 1 1 45%;
    margin: 10px 0;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;
