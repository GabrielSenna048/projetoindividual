var express = require("express");
var router = express.Router();

var torcedorController = require("../controllers/torcedorController");

router.get("/:quizId", function (req, res) {
  torcedorController.buscarTorcedorPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  torcedorController.cadastrar(req, res);
})

module.exports = router;