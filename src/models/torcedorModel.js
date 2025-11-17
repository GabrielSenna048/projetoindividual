var database = require("../database/config");

function buscarTorcedorPorEmpresa(fk_quiz) {

  var instrucaoSql = `SELECT * FROM torcedor a WHERE fk_quiz = ${idQuiz}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idQuiz, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_quiz) torcedor VALUES (${descricao}, ${idQuiz})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarTorcedorPorEmpresa,
  cadastrar
}
