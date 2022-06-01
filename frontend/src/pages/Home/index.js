import { useEffect, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import Loader from '../../components/Loader';

import {
  Container, Header, ListHeader, Card, InputSearchContainer,
} from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [searchTerm, contacts]);

  useEffect(() => {
    setIsLoading(true);

    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`).then(async (response) => {
      const json = await response.json();
      setContacts(json);
      setIsLoading(false);
    }).catch((e) => {
      console.log('error', e);
    });
  }, [orderBy]);

  function handleToggleOrdeyBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      <Loader />
      <InputSearchContainer>
        <input type="text" onChange={handleChangeSearchTerm} placeholder="pesquise pelo nome" />
      </InputSearchContainer>
      <Header>
        <strong>
          {filteredContacts.length}
          {' '}
          {filteredContacts.length === 1 ? 'contatos' : 'contato'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleToggleOrdeyBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow icon" />
        </button>
      </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
              <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete icon" />
            </button>
          </div>
        </Card>

      ))}

    </Container>
  );
}
