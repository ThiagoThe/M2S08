const { Router } = require("express");
const {
  createOneCompany,
  listCompanies,
  listOneCompany,
  updateOneCompany,
  deleteOneCompany,
} = require("../controllers/companies.controller");

class CompaniesRouter {
  routesFromCompanies() {
    const companiesRoutes = Router();
    companiesRoutes.post("/createOneCompany", createOneCompany);
    companiesRoutes.get("/listCompanies", listCompanies);
    companiesRoutes.get("/listOneCompany/:id", listOneCompany);
    companiesRoutes.put("/updateOneCompany/:id", updateOneCompany);
    companiesRoutes.delete("/deleteOneCompany/:id", deleteOneCompany);

    return companiesRoutes;
  }
}

module.exports = new CompaniesRouter();
