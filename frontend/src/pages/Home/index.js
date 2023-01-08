/* eslint-disable no-nested-ternary */
import Loader from '../../components/Loader';

import {
  Container,
} from './styles';
import useHome from './useHome';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactList from './components/ContactList';

import Modal from '../../components/Modal';

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

      {contacts.length > 0 && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {(hasError) && (<ErrorStatus onTryAgain={handleTryAgain} />)}

      {!hasError && (
      <>
        {contacts.length < 1 && !isLoading && (
          <EmptyList />
        )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFound searchTerm={searchTerm} />
          )}
      </>
      )}

      <ContactList
        filteredContacts={filteredContacts}
        orderBy={orderBy}
        onToggleOrdeyBy={handleToggleOrdeyBy}
        onDeleteContact={handleDeleteContact}
      />

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

    </Container>
  );
}
