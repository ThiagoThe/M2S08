const { Router } = require("express");
const {
  createOneCategory,
  listCategories,
} = require("../controllers/category.controller");

class CategoryRouter {
  routesFromCategory() {
    const categoryRoutes = Router();
    categoryRoutes.post("/createOneCategory", createOneCategory);
    categoryRoutes.get("/listCategories", listCategories);
    return categoryRoutes;
  }
}

module.exports = new CategoryRouter();
