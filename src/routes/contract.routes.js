const { Router } = require("express");
const {
  createOneContract,
  listAllContracts,
  listOneContract,
  updateOneContract,
  deleteOneContract,
} = require("../controllers/contract.controller");

class ContractRouter {
  routesFromContract() {
    const contractRoutes = Router();
    contractRoutes.post("/createOneContract", createOneContract);
    contractRoutes.get("/listAllContracts", listAllContracts);
    contractRoutes.get("/listOneContract/:id", listOneContract);
    contractRoutes.put("/updateOneContract/:id", updateOneContract);
    contractRoutes.patch("/deleteOneContract/:id", deleteOneContract);

    return contractRoutes;
  }
}

module.exports = new ContractRouter();
