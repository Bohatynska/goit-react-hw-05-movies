import styled from 'styled-components';

export const Form = styled.form`
  width: 600px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  flex-direction: row;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  background-color: #38539f;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;
  &:hover,
  &:focus {
    background-color: #a39cf4;
  }
`;

export const Input = styled.input`
  height: 41px;
  width: 100%;
  background-color: #38539f;
  font-size: 20px;
  padding-left: 15px;
  border-radius: 5px;
  &:hover,
  &:focus {
    background-color: #a39cf4;
  }
`;
