const { Router } = require("express");
const {
  createOneCategory,
  listCategories,
  listOneCategory,
} = require("../controllers/category.controller");

class CategoryRouter {
  routesFromCategory() {
    const categoryRoutes = Router();
    categoryRoutes.post("/createOneCategory", createOneCategory);
    categoryRoutes.get("/listCategories", listCategories);
    categoryRoutes.get("/listOneCategory/:id", listOneCategory);

    return categoryRoutes;
  }
}

module.exports = new CategoryRouter();
