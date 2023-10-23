import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  margin-bottom: 40px;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(400px, auto);
  grid-gap: 25px;
  margin: 0 auto;
  padding: 0;
`;

export const Li = styled.li`
  overflow: hidden;
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 450px;
`;

export const FilmTitle = styled.p`
  font-size: 17px;
  font-style: italic;
  font-weight: 600;
  color: #c13418;
  margin: 0 auto;
  display: table;
`;
