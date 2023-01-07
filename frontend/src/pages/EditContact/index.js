import { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import toast from '../../utils/toast';
import ContactsService from '../../services/ContactsService';
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

import Loader from '../../components/Loader';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        contactFormRef.current.setFieldsValue(contact);

        setIsLoading(false);
      } catch (e) {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, history]);

  function handleSubmit() {
    //
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader title="Editar Mateus Silva" />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
