const { Company } = require("../models/companies");

class CompaniesController {
  async createOneCompany(req, res) {
    const {
      companyName,
      cnpj,
      contact,
      cep,
      adress,
      neighborhood,
      city,
      state,
      number,
      complement,
      rhAnalystName,
      supervisorName,
    } = req.body;

    try {
      const newCompany = await Company.create({
        companyName,
        cnpj,
        contact,
        cep,
        adress,
        neighborhood,
        city,
        state,
        number,
        complement,
        rhAnalystName,
        supervisorName,
      });

      return res.status(201).send(newCompany);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível criar um registro de empresa!",
        cause: error.message,
      });
    }
  }

  async listCompanies(req, res) {
    const data = await Company.findAll();

    try {
      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível listar os registros de empresas!",
        cause: error.message,
      });
    }
  }

  async listOneCompany(req, res) {
    const { id } = req.params;

    try {
      const data = await Company.findByPk(id);
      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível listar o registro de empresa!",
        cause: error.message,
      });
    }
  }

  async updateOneCompany(req, res) {
    const { id } = req.params;
    const {
      companyName,
      cnpj,
      contact,
      cep,
      adress,
      neighborhood,
      city,
      state,
      number,
      complement,
      rhAnalystName,
      supervisorName,
    } = req.body;

    try {
      const data = await Company.update(
        {
          companyName,
          cnpj,
          contact,
          cep,
          adress,
          neighborhood,
          city,
          state,
          number,
          complement,
          rhAnalystName,
          supervisorName,
        },
        { where: { id } }
      );

      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível atualizar o registro de empresa!",
        cause: error.message,
      });
    }
  }

  async deleteOneCompany(req, res) {
    const { id } = req.params;

    try {
      const data = await Company.destroy({ where: { id } });
      return res.status(200).send(data);
    } catch (error) {
      console.error(error.message);
      return res.status(400).send({
        message: "Não foi possível deletar o registro de empresa!",
        cause: error.message,
      });
    }
  }
}

module.exports = new CompaniesController();
