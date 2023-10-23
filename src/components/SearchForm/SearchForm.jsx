import { useState } from 'react';
import { Form, Input, SubmitButton } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const changeInput = e => {
    const inputData = e.target.value.trim().toLowerCase();
    setQuery(inputData);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      alert('You forgot to enter a request');
      return;
    }
    onSubmit(query);
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Input
          autoFocus
          type="text"
          autoComplete="off"
          placeholder="Search movies???"
          onChange={changeInput}
        />
      </label>
      <SubmitButton type="submit">Search</SubmitButton>
    </Form>
  );
};
export default SearchForm;
