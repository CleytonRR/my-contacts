const db = require('../database');

class CategoriesController {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');

    return rows;
  }

  async create({ name }) {
    const [row] = await db.query(`
    INSERT INTO categories(name)
    VALUES($1)
    `, [name]);

    return row;
  }

  async findByName(name) {
    const [row] = await db.query(`
    SELECT * from categories
    WHERE name = $1
    `, [name]);

    return row;
  }

  async delete(id) {
    await db.query(`
      DELETE FROM categories
      WHERE id = $1
    `, [id]);
  }
}

module.exports = new CategoriesController();
