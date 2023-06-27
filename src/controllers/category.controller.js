const { category } = require("../models/category");

class CategoryController {
  async createOneCategory(req, res) {
    const { name } = req.body;
    const data = await category.create({ name });
    return res.status(201).send(data);
  }

  async listCategories(req, res) {
    const data = await category.findAll();
    return res.status(200).send(data);
  }
}

module.exports = new CategoryController();
