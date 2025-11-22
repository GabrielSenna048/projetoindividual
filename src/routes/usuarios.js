var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");


router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/salvarNivel", function (req, res) {
    usuarioController.salvarNivel(req, res);
});




router.get("/kpi/media", function (req, res) {
    usuarioController.kpiMedia(req, res);
});

router.get("/kpiUsuario/:id", function (req, res) {
    usuarioController.kpiUsuario(req, res);
});


module.exports = router;