const express = require("express");
const routerCompanies = express.Router();
const Company = require("../../src/models/companies");

// Rota: Cadastrar uma nova empresa
routerCompanies.post("/companies", async (req, res) => {
  try {
    const { name, address, city, country } = req.body;
    const company = await Company.create({ name, address, city, country });
    res.json(company);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao cadastrar empresa" });
  }
});

// Rota: Listar todas as empresas
routerCompanies.get("/companies", async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao listar empresas" });
  }
});

// Rota: Exibir informações de uma empresa específica
routerCompanies.get("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ message: "Empresa não encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar empresa" });
  }
});

// Rota: Atualizar informações de uma empresa específica
routerCompanies.put("/companies/:id", async (req, res) => {
  try {
    const { name, address, city, country } = req.body;
    const company = await Company.findByPk(req.params.id);
    if (company) {
      company.name = name;
      company.address = address;
      company.city = city;
      company.country = country;
      await company.save();
      res.json(company);
    } else {
      res.status(404).json({ message: "Empresa não encontrada" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar empresa" });
  }
});

module.exports = routerCompanies;
