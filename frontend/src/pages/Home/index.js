import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts').then(async (response) => {
      const json = await response.json();
      setContacts(json);
    }).catch((e) => {
      console.log('error', e);
    });
  }, []);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="pesquise pelo nome" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>nome</span>
            <img src={arrow} alt="Arrow icon" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>Instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete icon" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
