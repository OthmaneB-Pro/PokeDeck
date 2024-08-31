import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchBar() {
    const [name, setName] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

  return (
    <SearchBarStyled>
      <h3>Faites votre recherche :</h3>
      <div className="search-container">
        <input type="search" placeholder="Recherchez votre Pokémon" value={name} onChange={handleChange}/>
        <button type="submit" onSubmit={handleSubmit}>
          <FaSearch />
        </button>

      </div>
    </SearchBarStyled>
  );
}

const SearchBarStyled = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

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
    padding-right: 50px; 
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

  button {
    width: 35px;
    height: 35px;
    position: absolute;
    right: 5px;
    background-color: #a7a7a7;
    border: none;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;

    svg {
      color: #fff;
      font-size: 16px;
    }

    &:hover {
      background-color: #444444;
    }
  }
`;