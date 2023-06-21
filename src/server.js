const express = require("express"); //Framework da aplicação
const cors = require("cors"); // Biblioteca utilizada para inserir headers http
const connection = require("./database/connection"); // Conexão com o banco de dados

class Server {
  constructor(app = express()) {
    this.middlewares(app);
    this.database();
    this.initializeServer(app);
  }

  async initializeServer(app) {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }

  async middlewares(app) {
    app.use(cors());
    app.use(express.json());
  }

  async database() {
    try {
      await connection.authenticate();
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (error) {
      console.log("não foi possivel autenticar");
    }
  }
}

module.exports = { Server };
