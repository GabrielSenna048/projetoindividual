var quizModel = require("../models/quizModel");

function buscarPorPontuacao(req, res) {
  var pontuacao = req.query.pontuacao;

  quizModel.buscarPorPontuacao(pontuacao).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  quizModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  quizModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var pontuacao = req.body.Pontuacao;
  var dtquiz = req.body.dtquiz;

  quizModel.buscarPorpontuacao(pontuacao).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a quiz com o pontuacao ${pontuacao} já existe` });
    } else {
      quizModel.cadastrar(dtquiz, pontuacao).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorPontuacao,
  buscarPorId,
  cadastrar,
  listar,
};
