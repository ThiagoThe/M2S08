const { Router } = require("express");
const {
  createOneTrainee,
  listTrainees,
  listOneTrainee,
  updateOneTrainee,
  deleteOneTrainee,
} = require("../controllers/trainee.controller");

class TraineeRouter {
  routesFromTrainee() {
    const traineeRoutes = Router();
    traineeRoutes.post("/createOneTrainee", createOneTrainee);
    traineeRoutes.get("/listTrainees", listTrainees);
    traineeRoutes.get("/listOneTrainee/:id", listOneTrainee);
    traineeRoutes.put("/updateOneTrainee/:id", updateOneTrainee);
    traineeRoutes.delete("/deleteOneTrainee/:id", deleteOneTrainee);

    return traineeRoutes;
  }
}

module.exports = new TraineeRouter();
