const { router } = require("express");
const { createOneCategory } = require("../controllers/category.controller");

class categoryRoutes {
  routesFromCategory() {
    const categoryRoutes = router();
    categoryRoutes.post("/createOneCategory", createOneCategory);
    return categoryRoutes;
  }
}

module.exports = new categoryRoutes();
