var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM empresa WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, pontuacao, dtQuiz FROM empresa`;

  return database.executar(instrucaoSql);
}

function buscarPorData(dtQuiz) {
  var instrucaoSql = `SELECT * FROM empresa WHERE dtQuiz = '${dtQuiz}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(pontuacao, dtQuiz) {
  var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${pontucao}', '${dtQuiz}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorData, buscarPorId, cadastrar, listar };
