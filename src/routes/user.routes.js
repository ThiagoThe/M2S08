const { Router } = require("express");
const {
  createOneUser,
  listUsers,
  listOneUser,
  updateOneUser,
  deleteOneUser,
  userLogin,
} = require("../controllers/user.controller");

class UserRouter {
  routesFromUser() {
    const userRoutes = Router();
    userRoutes.post("/createOneUser", createOneUser);
    userRoutes.get("/listUsers", listUsers);
    userRoutes.get("/listOneUser/:id", listOneUser);
    userRoutes.patch("/updateOneUser/:id", updateOneUser);
    userRoutes.delete("/deleteOneUser/:id", deleteOneUser);
    userRoutes.post("/userLogin", userLogin);

    return userRoutes;
  }
}

module.exports = new UserRouter();
