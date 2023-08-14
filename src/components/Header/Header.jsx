import {
  BlockLogo,
  Container,
  HeaderBox,
  Logotype,
  TextLogo,
  Navigation,
  HeaderLink,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <BlockLogo to="/">
          <Logotype />
          <TextLogo>НОВА ПОШТА</TextLogo>
        </BlockLogo>
        <Navigation>
          <HeaderLink to="/">
            <span>Перевірка</span> ТТН
          </HeaderLink>
          <HeaderLink to="/history">Відділення</HeaderLink>
        </Navigation>
      </Container>
    </HeaderBox>
  );
};

export default Header;
