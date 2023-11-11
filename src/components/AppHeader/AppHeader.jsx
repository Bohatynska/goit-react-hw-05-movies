import { Header, Nav, StyledLink } from './AppHeader.styled';

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
    </Header>
  );
};
