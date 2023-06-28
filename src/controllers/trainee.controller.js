const { Trainee } = require("../models/trainee");

class TraineeController {
  async createOneTrainee(req, res) {
    const {
      name,
      email,
      rg,
      cpf,
      primaryPhoneContact,
      secondaryPhoneContact,
      dateBirth,
      fatherName,
      motherName,
      haveSpecialNeeds,
    } = req.body;

    try {
      const newTrainee = await Trainee.create({
        name,
        email,
        rg,
        cpf,
        primaryPhoneContact,
        secondaryPhoneContact,
        dateBirth,
        fatherName,
        motherName,
        haveSpecialNeeds,
      });

      return res.status(201).send(newTrainee);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível criar um registro de trainee!",
        cause: error.message,
      });
    }
  }

  async listTrainees(req, res) {
    const data = await Trainee.findAll();

    try {
      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível listar os registros de trainees!",
        cause: error.message,
      });
    }
  }

  async listOneTrainee(req, res) {
    const { id } = req.params;
    const data = await Trainee.findByPk(id);

    try {
      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível listar o registro de trainee!",
        cause: error.message,
      });
    }
  }

  async updateOneTrainee(req, res) {
    const { id } = req.params;
    const {
      name,
      email,
      rg,
      cpf,
      primaryPhoneContact,
      secondaryPhoneContact,
      dateBirth,
      fatherName,
      motherName,
      haveSpecialNeeds,
    } = req.body;

    try {
      const data = await Trainee.update(
        {
          name,
          email,
          rg,
          cpf,
          primaryPhoneContact,
          secondaryPhoneContact,
          dateBirth,
          fatherName,
          motherName,
          haveSpecialNeeds,
        },
        { where: { id } }
      );

      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível atualizar o registro de trainee!",
        cause: error.message,
      });
    }
  }

  async deleteOneTrainee(req, res) {
    const { id } = req.params;

    try {
      const data = await Trainee.destroy({ where: { id } });

      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível deletar o registro de trainee!",
        cause: error.message,
      });
    }
  }
}

module.exports = new TraineeController();
