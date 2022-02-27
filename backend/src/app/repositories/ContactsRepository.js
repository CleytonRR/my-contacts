const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '20003939290',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
