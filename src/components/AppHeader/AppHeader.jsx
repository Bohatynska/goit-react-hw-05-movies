import {
  Header,
  NavPanel,
  StyledNavLink,
} from 'components/AppHeader/AppHeader.styled';
const AppHeader = () => {
  return (
    <Header>
      <NavPanel>
        <StyledNavLink to="/"> Home</StyledNavLink>
        <StyledNavLink to="/movies"> Movies</StyledNavLink>
      </NavPanel>
    </Header>
  );
};
export default AppHeader;
