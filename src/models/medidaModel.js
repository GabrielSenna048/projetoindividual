var database = require("../database/config");

function buscarUltimasMedidas(idCorinthians, limite_linhas) {

    var instrucaoSql = `
    SELECT 
        qntAmor AS nivel,
        momento,
        DATE_FORMAT(momento, '%H:%i:%s') AS momento_grafico
    FROM medida
    WHERE fk_corinthians = ${idCorinthians}
    ORDER BY id DESC
    LIMIT ${limite_linhas};
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idCorinthians) {

var instrucaoSql = `
    SELECT 
        qntAmor AS nivel,
        DATE_FORMAT(momento, '%H:%i:%s') AS momento_grafico,
        fk_corinthians
    FROM medida
    WHERE fk_corinthians = ${idCorinthians}
    ORDER BY id DESC
    LIMIT 1;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
