const { Router } = require("express");
const {
  createOneCategory,
  listCategories,
  listOneCategory,
  updateOneCategory,
  deleteOneCategory,
} = require("../controllers/category.controller");

class CategoryRouter {
  routesFromCategory() {
    const categoryRoutes = Router();
    categoryRoutes.post("/createOneCategory", createOneCategory);
    categoryRoutes.get("/listCategories", listCategories);
    categoryRoutes.get("/listOneCategory/:id", listOneCategory);
    categoryRoutes.patch("/updateOneCategory/:id", updateOneCategory);
    categoryRoutes.delete("/deleteOneCategory/:id", deleteOneCategory);

    return categoryRoutes;
  }
}

module.exports = new CategoryRouter();
