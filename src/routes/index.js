const { router } = require("express");
const { routesFromCategory } = require("./category.routes");
const routes = router();
routes.use("api", [routesFromCategory]);
module.exports = routes;
