require("dotenv").config();

const express = require("express");
const routes = require("./routes/routes");

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(`Um erro ocorreu: ${error.message}\n`);
  console.log(error);
});

database.once("connected", () => {
  console.log("Banco de dados conectado.");
});

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server iniciado, escutando porta ${3000}`);
});
