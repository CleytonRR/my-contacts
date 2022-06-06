import HttpClient from './utils/HttpClient';

class ContactsServices {
  async listContacts(orderBy = 'asc') {
    return HttpClient.get(`http://localhost:3001/contacts?orderBy=${orderBy}`);
  }
}

export default new ContactsServices();
