import { Link } from 'react-router-dom';

import { Container } from './style';

import arrow from '../../assets/images/icons/arrow.svg';

export default function PageHeader() {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span>Voltar</span>
      </Link>
      <h1>Novo contato</h1>
    </Container>
  );
}
