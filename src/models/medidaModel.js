var database = require("../database/config");

function buscarUltimasMedidas(idTorcedor, limite_linhas) {

    var instrucaoSql = `
        SELECT 
            nivelTorcedor AS nivel,
            fk_quiz
        FROM torcedor
        WHERE id = ${idTorcedor}
        ORDER BY id DESC
        LIMIT ${limite_linhas};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idTorcedor) {

    var instrucaoSql = `
        SELECT 
            nivelTorcedor AS nivel,
            fk_quiz
        FROM torcedor
        WHERE id = ${idTorcedor}
        ORDER BY id DESC
        LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
};