import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 30px;
`;

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

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 360px;
  margin-bottom: 8px;
`;

export const Category = styled.p`
  color: #2e0747;
  font-weight: 400;
  font-size: 15px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Description = styled.span`
  color: #551f78;
`;
