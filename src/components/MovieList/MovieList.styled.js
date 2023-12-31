import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 360px;
`;
