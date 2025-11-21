var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

// Gráficos
router.get("/dadosTimes", function (req, res) {
    graficosController.buscarTimes(req, res);
});

router.get("/dadosNivelTorcedor/:id", function (req, res) {
    graficosController.buscarDadosNivelTorcedor(req, res);
});

// KPIs
router.get("/nivelTorcedor/:id", function (req, res) {
    graficosController.buscarNivelTorcedor(req, res);
});

module.exports = router;