var database = require("../database/config");

// Gráficos
function buscarTimes() {

    var instrucaoSql = `
        SELECT 
            COUNT(id) AS QuantidadeTotal,
            time.nome as Time
        FROM time JOIN usuario
            ON fkTime = idTime
        GROUP BY fkTime;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosNivelTorcedor(id) {

    var instrucaoSql = `
        SELECT 
            ROUND(AVG(nivelTorcedor)) AS mediaNivelTorcedor, (SELECT 
            nivelTorcedor
        FROM usuario
        WHERE id = ${id}) AS nivelTorcedor
        FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

// KPIs
function buscarNivelTorcedor(id) {

    var instrucaoSql = `
        SELECT 
            nivelTorcedor
        FROM usuario
        WHERE id = ${id};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTimes,
    buscarNivelTorcedor,
    buscarDadosNivelTorcedor
};