var graficosModel = require("../models/graficosModel");

// Gráficos
function buscarTimes(req, res) {
    graficosModel.buscarTimes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDadosNivelTorcedor(req, res) {
    var id = req.params.id;
    console.log('Recuperando medidas em tempo real');
    graficosModel.buscarDadosNivelTorcedor(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o nivel do torcedor.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

// KPIs
function buscarNivelTorcedor(req, res) {
    var id = req.params.id;
    console.log('Recuperando medidas em tempo real');
    graficosModel.buscarNivelTorcedor(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o nivel do torcedor.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarTimes,
    buscarNivelTorcedor,
    buscarDadosNivelTorcedor
}
