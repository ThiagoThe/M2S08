const { Category } = require("../models/category");

class CategoryController {
  async createOneCategory(req, res) {
    const { name } = req.body;
    const data = await Category.create({ name });
    return res.status(201).send(data);
  }

  async listCategories(req, res) {
    const data = await Category.findAll();
    return res.status(200).send(data);
  }

  async listOneCategory(req, res) {
    const { id } = req.params;
    const data = await Category.findByPk(id);
    return res.status(200).send(data);
  }
}

module.exports = new CategoryController();
