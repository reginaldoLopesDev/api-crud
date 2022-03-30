const express = require("express");

const Model = require("../models/model");
const router = express.Router();

router.post("/save", async (req, res) => {
  const nome = req.body.nome;
  const idade = req.body.idade;

  const data = new Model({
    nome: nome,
    idade: idade,
  });
  try {
    const dataSaved = await data.save();
    res.status(200).json(dataSaved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/byId", (req, res) => {
  console.log(`Método get, retornar apenas os dados requisitados pelo Id`);
  res.send("Retornar dados requisitados.");
});

router.patch("/updateById/:id", (req, res) => {
  console.log(`Método patch, atualizar os dados pelo Id`);
  res.send("Atualizar dados pelo Id.");
});

router.delete("/deleteById/:id", (req, res) => {
  console.log(`Método delete, deletar os dados pelo Id.`);
  res.send("Deletar dados pelo Id.");
});

module.exports = router;
