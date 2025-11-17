var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM quiz WHERE id = '${idQuiz}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, pontuacao, dtQuiz FROM quiz`;

  return database.executar(instrucaoSql);
}

function buscarPorData(dtQuiz) {
  var instrucaoSql = `SELECT * FROM quiz WHERE dtQuiz = '${dtQuiz}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(pontuacao, dtQuiz) {
  var instrucaoSql = `INSERT INTO quiz (pontuacao, dtQuiz) VALUES ('${pontucao}', '${dtQuiz}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorData, buscarPorId, cadastrar, listar };
