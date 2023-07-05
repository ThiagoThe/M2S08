const { User } = require("../models/user");
const { sign } = require("jsonwebtoken");
const { config } = require("dotenv");

class UserController {
  async createOneUser(req, res) {
    const { traineeId, name, email, password } = req.body;

    try {
      const newUser = await User.create({
        traineeId,
        name,
        email,
        password,
      });

      return res.status(201).send(newUser);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível criar um usuário!",
        cause: error.message,
      });
    }
  }

  async listUsers(req, res) {
    const data = await User.findAll();

    try {
      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível listar os usuários!",
        cause: error.message,
      });
    }
  }

  async listOneUser(req, res) {
    const { id } = req.params;

    try {
      const data = await User.findByPk(id);
      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível listar o usuário!",
        cause: error.message,
      });
    }
  }

  async updateOneUser(req, res) {
    const { id } = req.params;
    const { traineeId, name, email, password } = req.body;

    try {
      const data = await User.update(
        {
          traineeId,
          name,
          email,
          password,
        },
        {
          where: { id },
        }
      );
      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível atualizar o usuário!",
        cause: error.message,
      });
    }
  }

  async deleteOneUser(req, res) {
    const { id } = req.params;

    try {
      const data = await User.destroy({
        where: { id },
      });
      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível deletar o usuário!",
        cause: error.message,
      });
    }
  }

  async userLogin(req, res) {
    const { email, password } = req.body;

    try {
      const data = await User.findOne({
        where: { email },
      });

      if (data.password === password) {
        const payload = { email: data.email };
        const token = sign(payload, process.env.SECRET, { expiresIn: "1h" });
        return res.status(200).send({ data, token });
      } else {
        return res.status(400).send({
          message: "Senha invalida!",
        });
      }
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível fazer o login!",
        cause: error.message,
      });
    }
  }
}

module.exports = new UserController();
