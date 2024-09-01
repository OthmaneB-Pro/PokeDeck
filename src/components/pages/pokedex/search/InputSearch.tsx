import styled from "styled-components";

type InputSearchType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export default function InputSearch({ name, setName }: InputSearchType) {
  return (
    <InputSearchStyled>
      <h3>Faites votre recherche :</h3>
      <div className="search-container">
        <input
          type="search"
          placeholder="Recherchez votre Pokémon"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
    </InputSearchStyled>
  );
}

const InputSearchStyled = styled.div`
  h3 {
    color: #333;
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
  }

  .search-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 320px;
  }

  input {
    width: 100%;
    height: 45px;
    padding: 0 15px;
    padding-right: 15px;
    border-radius: 25px;
    border: 2px solid #ddd;
    background-color: #fff;
    font-size: 16px;
    color: #555;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }

    &::placeholder {
      color: #aaa;
      font-style: italic;
    }
  }
`;
