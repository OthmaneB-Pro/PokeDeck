import styled from "styled-components";

type InputValueType = {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
};

export default function InputValue({
  value,
  name,
  type,
  placeholder,
  onChange,
  required,
}: InputValueType) {
  return (
    <InputValueStyled
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
}

const InputValueStyled = styled.input`
  width: 90%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border 0.3s ease;

  &:focus {
    border-color: #3a92da;
    outline: none;
  }
`;
