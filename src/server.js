const express = require("express"); //Framework da aplicação
const cors = require("cors"); // Biblioteca utilizada para inserir headers http
const connection = require("./database/connection"); // Conexão com o banco de dados
const routes = require("./routes"); // Rotas da aplicação

class Server {
  constructor(server = express()) {
    this.middlewares(server);
    this.database();
    this.allRoutes(server); // rotas da app
    this.initializeServer(server);
  }

  async allRoutes(app) {
    app.use(routes);
  }

  async initializeServer(app) {
    const PORT = 3333;
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
      console.log("não foi possivel autenticar", error);
      throw error;
    }
  }
}

module.exports = { Server };
