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

router.get("/byId/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);

    if (!data) {
      res.status(422).json({ message: "Registro não encontrado." });
      return;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/updateById/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;

    //To return the modified data rather than the original data.
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, newData, options);

    if (!result) {
      res.status(422).json({ message: "Registro não encontrado." });
      return;
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/deleteById/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const data = await Model.findByIdAndDelete(id);

    if (!data) {
      res.status(422).json({ message: "Registro não encontrado." });
      return;
    }

    res.send(`O registro com o nome ${data.nome} foi deletado.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
