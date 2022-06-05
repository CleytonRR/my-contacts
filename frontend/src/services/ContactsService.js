class ContactsServices {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);

    return response.json();
  }
}

export default new ContactsServices();
