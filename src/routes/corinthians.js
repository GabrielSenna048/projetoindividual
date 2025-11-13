var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/corinthiansController");

router.get("/:quizId", function (req, res) {
  aquarioController.buscarCorinthianssPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  corinthiansController.cadastrar(req, res);
})

module.exports = router;