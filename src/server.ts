import express from "express"; // ECSM Modules
import router from "./router";
// const express = require("express"); // Dependecias common js
const app = express(); // Instancia del servidor

// Leer formularios
app.use(express.json());
// Routing
app.use("/", router);

export default app;