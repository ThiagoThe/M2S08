const { Router } = require("express");
const { routesFromCategory } = require("./category.routes");
const { routesFromTrainee } = require("./trainee.routes");
const { routesFromCompanies } = require("./companies.routes");
const { routesFromContract } = require("./contract.routes");

const routes = new Router();

routes.use("/api", [
  routesFromCategory(),
  routesFromTrainee(),
  routesFromCompanies(),
  routesFromContract(),
]);

module.exports = routes;
