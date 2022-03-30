const express = require("express");

const router = express.Router();

router.post("/save", (req, res) => {
  console.log(`Método post`);
  res.send("Salvar dados.");
});

router.get("/all", (req, res) => {
  console.log(`Método get, retornar todos os dados.`);
  res.send("Retornar todos os dados.");
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
