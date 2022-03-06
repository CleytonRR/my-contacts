const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoriesController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ eror: 'Name is required' });
    }

    const categoryExistsByName = await CategoriesRepository.findByName(name);

    if (categoryExistsByName) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const category = await CategoriesRepository.create({ name });

    return response.status(201).json(category);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CategoriesRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new CategoriesController();
