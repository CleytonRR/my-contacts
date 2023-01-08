/* eslint-disable no-nested-ternary */

import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

import {
  Container,
  Header,
  ListHeader,
  Card,
  InputSearchContainer,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';
import useHome from './useHome';

export default function Home() {
  const {
    isLoading,
    contactBeingDeleted,
    isLoadingDelete,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    isDeleteModalVisible,
    contacts,
    handleChangeSearchTerm,
    hasError,
    filteredContacts,
    handleTryAgain,
    searchTerm,
    orderBy,
    handleToggleOrdeyBy,
    handleDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"`}
        confirmLabel="Deletar"
        isLoading={isLoadingDelete}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteContact}
        visible={isDeleteModalVisible}
      >
        <p>Está ação não poderá ser desfeita</p>
      </Modal>

      {contacts.length > 0 && (
      <InputSearchContainer>
        <input type="text" onChange={handleChangeSearchTerm} placeholder="pesquise pelo nome" />
      </InputSearchContainer>

      )}
      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
}
      >
        {!hasError && contacts.length > 0 && (
          <strong>
            {filteredContacts.length}
            {' '}
            {filteredContacts.length === 1 ? 'contatos' : 'contato'}
          </strong>
        )}
        <Link to="/new">Novo contato</Link>
      </Header>

      {(hasError) && (
        <ErrorContainer>
          <img src={sad} alt="sad" />
          <div className="details">
            <strong>Ocorreu um texto ao obter seus contatos</strong>
            <Button type="button" onClick={handleTryAgain}>Tentar novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
      <>
        {contacts.length < 1 && !isLoading && (
          <EmptyListContainer>
            <img src={emptyBox} alt="Empty box" />

            <p>
              Você ainda não tem nenhum contato cadastrado!
              Clique no botão
              {' '}
              <strong>”Novo contato”</strong>
              {' '}
              à cima para cadastrar o seu primeiro!

            </p>
          </EmptyListContainer>
        )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
          <SearchNotFoundContainer>
            <img src={magnifierQuestion} alt="Magnifier Question" />
            <span>
              Nenhum resultado foi encontrado para
              <strong>
                ”
                {searchTerm}
                ”
              </strong>
              .

            </span>
          </SearchNotFoundContainer>

          )}

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
                {contact.category.name && (
                <small>{contact.category.name}</small>
                )}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button" onClick={() => handleDeleteContact(contact)}>
                <img src={trash} alt="Delete icon" />
              </button>
            </div>
          </Card>

        ))}
      </>
      )}

    </Container>
  );
}
