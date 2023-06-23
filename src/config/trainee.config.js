const express = require("express");
const routerTrainee = express.Router();
const Trainee = require(".././models/trainee");

// Rota: Cadastrar um novo estagiário
routerTrainee.post("/trainees-add", async (req, res) => {
  try {
    const {
      name,
      age,
      email,
      rg,
      cpf,
      primary_phone_contact,
      secondary_phone_contact,
      date_birth,
      father_name,
      mother_name,
      have_special_needs,
    } = req.body;
    const trainee = await Trainee.create({
      name,
      age,
      email,
      rg,
      cpf,
      primary_phone_contact,
      secondary_phone_contact,
      date_birth,
      father_name,
      mother_name,
      have_special_needs,
    });
    res.json(trainee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: "Erro ao cadastrar estagiário" });
  }
});

// Rota: Listar todos os estagiários
routerTrainee.get("/trainees-list", async (req, res) => {
  try {
    const trainees = await Trainee.findAll();
    res.json(trainees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: "Erro ao listar estagiários" });
  }
});

// Rota: Exibir informações de um estagiário específico
routerTrainee.get("/trainees/:id", async (req, res) => {
  try {
    const trainee = await Trainee.findByPk(req.params.id);
    if (trainee) {
      res.json(trainee);
    } else {
      res.status(404).json({ message: "Estagiário não encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar estagiário" });
  }
});

// Rota: Atualizar informações de um estagiário específico
routerTrainee.put("/trainees/:id", async (req, res) => {
  try {
    const { name, age } = req.body;
    const trainee = await Trainee.findByPk(req.params.id);
    if (trainee) {
      trainee.name = name;
      trainee.age = age;
      await trainee.save();
      res.json(trainee);
    } else {
      res.status(404).json({ message: "Estagiário não encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar estagiário" });
  }
});

module.exports = routerTrainee;
