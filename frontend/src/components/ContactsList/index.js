import arrow from '../../assets/images/icons/arrow.svg';

import { Container, Header, ListContainer } from './styles';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>nome</span>
            <img src={arrow} alt="Arrow icon" />
          </button>
        </header>
      </ListContainer>
    </Container>
  );
}
