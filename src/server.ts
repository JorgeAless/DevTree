import express from "express";
import 'dotenv/config';
import router from "./router";
import { ConnectDB } from "./config/db";
// const express = require("express"); // Dependecias common js
const app = express(); // Instancia del servidor

// Leer formularios
app.use(express.json());

/* Conectando a la base de datos*/
ConnectDB();
// Routing
app.use("/", router);

export default app;