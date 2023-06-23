const express = require("express"); //Framework da aplicação
const routerCategory = express.Router();
const category = require(".././models/category");

// Rota para cadastrar uma nova categoria
routerCategory.post("/category-add", async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await category.create({ name });
    res.json(newCategory);
  } catch (error) {
    res
      .status(500)
      .send({ error, message: "Não foi possível cadastrar a categoria" });
  }
});

// Rota para listar todas as categorias
routerCategory.get("/category-list", async (req, res) => {
  try {
    const categories = await category.findAll();
    res.json(categories);
  } catch (error) {
    res
      .status(500)
      .send({ error, message: "Não foi possível listar as categorias" });
  }
});

module.exports = routerCategory;
