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

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
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

      {isListEmpty && <EmptyList />}

      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <>
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

        </>
      )}

    </Container>
  );
}
