import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 20px 0;
`;

export const NavPanel = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 30px;
  &:not(:last-child) {
    margin-right: 50px;
  }
  &.active {
    color: #a5b9ca;
    font-weight: 600;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #a5b9ca;
    font-weight: 600;
  }
`;
