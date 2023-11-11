import styled from 'styled-components';

export const Form = styled.form`
  /* overflow: hidden; */
  width: 700px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background-color: #4d2f61;
  font-size: 20px;
  padding-left: 15px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  color: #b29ac2;
  ::placeholder {
    color: #b29ac2;
    font-weight: 600;
  }
`;
export const SearchButton = styled.button`
  cursor: pointer;
  height: 40px;
  width: auto;
  outline: none;
  background-color: #4d2f61;
  color: #b29ac2;
  padding: 10px 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: none;
  border-right: 1px solid;
`;
