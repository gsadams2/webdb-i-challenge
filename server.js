const express = require("express");

const accountsRouter = require("./accounts-router");

const server = express();

server.use(express.json());

server.use("/accounts", accountsRouter);

module.exports = server;
