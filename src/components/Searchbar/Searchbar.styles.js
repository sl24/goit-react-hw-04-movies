import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  margin-bottom: 26px;
  margin-left: 20px;
`;

const SearchInput = styled.input`
  margin-right: 16px;
  width: 250px;
  border-radius: 30px;
  padding-left: 20px;
  outline: none;
`;

const Button = styled.button`
  outline: none;
  padding: 12px 40px;
  border-radius: 30px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33d9de 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;
  &:hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;

const TextButton = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export { FormContainer, SearchInput, Button, TextButton };
