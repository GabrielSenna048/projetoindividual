var database = require("../database/config");

function buscarCorinthiansPorEmpresa(quizId) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${quizIdId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(quizId, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${quizId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarCorinthiansPorEmpresa,
  cadastrar
}
