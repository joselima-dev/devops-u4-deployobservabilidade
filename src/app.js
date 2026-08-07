const express = require("express");

const app = express();

// Dados fixos só para a API ter algo real para responder (não é banco de dados).
const tarefas = [
  { id: 1, titulo: "Configurar pipeline de CI", concluida: true },
  { id: 2, titulo: "Publicar aplicação em nuvem", concluida: false },
  { id: 3, titulo: "Configurar monitoramento e alertas", concluida: false },
];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API - Deploy Automatizado com Observabilidade em Nuvem",
    status: "online",
  });
});

// Endpoint dedicado de saúde: é nele que o Render e o Better Uptime vão bater
// nos Passos 2 e 3 para saber se a aplicação está de pé.
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/tarefas", (req, res) => {
  res.status(200).json(tarefas);
});

module.exports = app;
