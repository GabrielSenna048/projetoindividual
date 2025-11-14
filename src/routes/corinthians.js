var express = require("express");
var router = express.Router();

var corinthiansController = require("../controllers/corinthiansController");

router.get("/:quizId", function (req, res) {
  corinthiansController.buscarCorinthianssPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  corinthiansController.cadastrar(req, res);
})

module.exports = router;