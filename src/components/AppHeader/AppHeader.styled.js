import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  padding: 30px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(NavLink)`
  color: #551f78;
  font-weight: 500;
  font-size: 25px;
  &:not(:last-child) {
    margin-right: 50px;
  }
  &.active {
    color: #2e0747;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #2e0747;
    font-weight: 600;
  }
`;
