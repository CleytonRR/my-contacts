import HttpClient from './utils/HttpClient';

class ContactsServices {
  async listContacts(orderBy = 'asc') {
    return HttpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return HttpClient.get('/contacts', contact);
  }
}

export default new ContactsServices();
