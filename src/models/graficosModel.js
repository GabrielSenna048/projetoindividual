var database = require("../database/config");

// Gráficos
function buscarTimes() {
    var instrucaoSql = `
        SELECT 
            COUNT(u.id) AS QuantidadeTotal,
            t.nomeTime AS Time,
            t.idTime AS idTime
        FROM timeFut t
        LEFT JOIN usuario u
            ON u.fkTime = t.idTime
        GROUP BY t.idTime, t.nomeTime
        ORDER BY t.idTime;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosNivelTorcedor(id) {
    
    var instrucaoSql = `
        SELECT 
            ROUND(AVG(CAST(nivelTorcedor AS DECIMAL(10,2))), 2) AS mediaNivelTorcedor,
            (SELECT nivelTorcedor FROM usuario WHERE id = ${id}) AS nivelTorcedor
        FROM usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// KPIs
function buscarNivelTorcedor(id) {
    var instrucaoSql = `
        SELECT 
            nivelTorcedor
        FROM usuario
        WHERE id = ${id};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarTimes,
    buscarNivelTorcedor,
    buscarDadosNivelTorcedor
};
