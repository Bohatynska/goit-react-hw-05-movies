import { NavLink, Link } from 'react-router-dom';

import styled from 'styled-components';

export const LinkBack = styled(Link)`
  position: absolute;
  left: 30px;
  top: 70px;
  height: 40px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  &:hover,
  &:focus {
    color: #af7dd0;
  }
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const ImageWrapp = styled.div`
  width: 360px;
  margin-right: 40px;
`;

export const Poster = styled.img`
  width: 100%;
`;

export const MovieName = styled.h2`
  font-weight: 600;
  font-size: 35px;
  margin-bottom: 20px;
  color: #551f78;
`;

export const CategoryItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;

export const Category = styled.p`
  color: #551f78;
  font-weight: 600;
  font-size: 20px;
`;

export const Description = styled.span`
  font-weight: 400;
  color: #551f78;
`;

export const InfoTitle = styled.h3`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 25px;
  color: #551f78;
`;

export const InfoList = styled.ul`
  display: flex;
`;

export const InfoItem = styled.li`
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const InfoLink = styled(NavLink)`
  color: #551f78;
  font-weight: 500;
  font-size: 20px;
  &:hover,
  &:focus {
    color: #af7dd0;
    font-weight: 600;
  }
`;
