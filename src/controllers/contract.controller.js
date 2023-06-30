const { Contract } = require("../models/contract");

class ContractController {
  async createOneContract(req, res) {
    const {
      startValidity,
      endValidity,
      remuneration,
      extra,
      category_id,
      company_id,
      trainee_id,
    } = req.body;

    try {
      const newContract = await Contract.create({
        startValidity,
        endValidity,
        status: true,
        remuneration,
        extra,
        category_id,
        company_id,
        trainee_id,
      });
      return res.status(201).send(newContract);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível criar um registro de contrato!",
        cause: error.message,
      });
    }
  }

  async listAllContracts(req, res) {
    try {
      const allContracts = await Contract.findAll({
        include: [
          { model: Trainee, attributes: ["name", "rg"] },
          { model: Company, attributes: ["companyName", "cnpj"] },
          { model: Category, attributes: ["name"] },
        ],
      });
      return res.status(200).send(allContracts);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível buscar os registros de contrato!",
        cause: error.message,
      });
    }
  }

  async listOneContract(req, res) {
    const { id } = req.params;

    try {
      const oneContract = await Contract.findByPk(id);
      return res.status(200).send(oneContract);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível buscar o registro de contrato!",
        cause: error.message,
      });
    }
  }

  async updateOneContract(req, res) {
    const { id } = req.params;
    const {
      startValidity,
      endValidity,
      remuneration,
      extra,
      category_id,
      company_id,
      trainee_id,
    } = req.body;

    try {
      const updatedContract = await Contract.update(
        {
          startValidity,
          endValidity,
          remuneration,
          extra,
          category_id,
          company_id,
          trainee_id,
        },
        { where: { id } }
      );
      return res.status(200).send(updatedContract);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível atualizar o registro de contrato!",
        cause: error.message,
      });
    }
  }

  async deleteOneContract(req, res) {
    const { id } = req.params;

    try {
      const deletedContract = await Contract.destroy({ where: { id } });
      return res.status(200).send(deletedContract);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível deletar o registro de contrato!",
        cause: error.message,
      });
    }
  }
}
module.exports = new ContractController();
