const express = require("express");
const routerContract = express.Router();
const Contract = require(".././models/contract");
const Category = require(".././models/category");
const Company = require(".././models/companies");
const Trainee = require(".././models/trainee");

// Rota: Cadastrar um novo contrato
routerContract.post("/contracts-add", async (req, res) => {
  try {
    const {
      trainee_id,
      category_id,
      company_id,
      start_validity,
      end_validity,
      remuneration,
      extra,
    } = req.body;
    const contract = await Contract.create({
      trainee_id,
      category_id,
      company_id,
      start_validity,
      end_validity,
      remuneration,
      extra,
    });
    res.json(contract);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: "Erro ao cadastrar contrato" });
  }
});

// Rota: Listar todos os contratos
routerContract.get("/contracts-list", async (req, res) => {
  try {
    const contracts = await Contract.findAll({
      include: [Category, Company, Trainee],
    });
    res.json(contracts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: "Erro ao listar contratos" });
  }
});

// Rota: Exibir informações de um contrato específico
routerContract.get("/contracts-info/:id", async (req, res) => {
  try {
    const contract = await Contract.findByPk(req.params.id, {
      include: [Category, Company, Trainee],
    });
    if (contract) {
      res.json(contract);
    } else {
      res.status(404).json({ message: "Contrato não encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar contrato" });
  }
});

// Rota: Desativar um contrato
routerContract.patch("/contracts-off/:id", async (req, res) => {
  try {
    const contract = await Contract.findByPk(req.params.id);
    if (contract) {
      contract.status = false;
      await contract.save();
      res.json({ message: "Contrato desativado com sucesso" });
    } else {
      res.status(404).json({ message: "Contrato não encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao desativar contrato" });
  }
});

module.exports = routerContract;
