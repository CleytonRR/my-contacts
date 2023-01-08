import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

import Loader from '../../components/Loader';
import useEditContact from './useEditContact';

export default function EditContact() {
  const {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  } = useEditContact();
  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title={isLoading ? 'carregando...' : `Editar ${contactName}`} />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
