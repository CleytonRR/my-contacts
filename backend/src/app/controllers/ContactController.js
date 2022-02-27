class ContactController {
  index(request, response) {
    response.send('Hello');
  }

  show() {
    // Um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Atualizar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
