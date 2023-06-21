const { Sequelize } = require("sequelize");
const databaseConfig = require("../config/database.config");

const connection = new Sequelize(databaseConfig);

/* Teste de conexão com o banco de dados
try {
  connection.authenticate();
} catch (error) {
  console.log("não foi possivel autenticar");
}
 */
module.exports = connection;
