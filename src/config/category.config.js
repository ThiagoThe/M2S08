const { category } = require(".././models/category");

class categoryController {
  async createOneCategory(req, res) {
    const { name } = req.body;
    const data = await category.create({ name });
    return res.status(201).send(data);
  }
}

module.exports = new categoryController();
