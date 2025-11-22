var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

// Gráficos
router.get("/dadosTimes", function (req, res) {
    graficosController.buscarTimes(req, res);
});



// KPIs
router.get("/nivelTorcedor/:id", function (req, res) {
    graficosController.buscarNivelTorcedor(req, res);
});
router.get("/dadosNivelTorcedor/:id", function (req, res) {
    graficosController.buscarDadosNivelTorcedor(req, res);
});
router.put("/usuario/salvarNivel", (req, res) => {
    const { idUsuario, nivel } = req.body;

    const sql = "UPDATE usuario SET nivelTorcedor = ? WHERE id = ?";

    db.query(sql, [nivel, idUsuario], (erro) => {
        if (erro) {
            console.error(erro);
            return res.status(500).json({ erro });
        }
        res.json({ mensagem: "Nível salvo com sucesso!" });
    });
});

module.exports = router;