import express from "express"; // ECSM Modules
// const express = require("express"); // Dependecias common js
const app = express(); // Instancia del servidor

// Routing
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

// Configurando el puerto con variable de entorno
const port = process.env.PORT || 4000;
// Iniciando el servidor...
app.listen(port, () => {
  console.log("Servidor funcionando en el puerto: ", port);
});

