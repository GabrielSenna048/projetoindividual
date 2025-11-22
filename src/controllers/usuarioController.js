var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email || !senha) {
        return res.status(400).send("Email ou senha não enviados!");
    }

    usuarioModel.autenticar(email, senha)
        .then(resultado => {
            if (resultado.length == 1) {
                res.json(resultado[0]);
            } else if (resultado.length == 0) {
                res.status(403).send("Email ou senha inválidos!");
            } else {
                res.status(403).send("Mais de um usuário com as mesmas credenciais!");
            }
        })
        .catch(erro => {
            console.error("Erro no login: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fkTime = req.body.timeServer;
    var nivel = req.body.nivel;

    usuarioModel.cadastrar(nome, email, senha, fkTime, nivel)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao cadastrar:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function salvarNivel(req, res) {
    var id = req.body.idUsuario;
    var nivel = req.body.nivel;

    usuarioModel.salvarNivel(id, nivel)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao atualizar nível:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

// controllers/usuarioController.js
function kpiMedia(req, res) {
  usuarioModel.kpiMedia()
    .then(resultado => {
      // resultado pode vir como [ { mediaNivel: 42.50 } ] ou []
      if (Array.isArray(resultado) && resultado.length > 0) {
        const media = resultado[0].mediaNivel ?? resultado[0].media ?? null;
        return res.status(200).json({ media: media });
      } else {
        return res.status(200).json({ media: 0 });
      }
    })
    .catch(erro => {
      console.error("Erro ao obter média (controller):", erro.sqlMessage ?? erro);
      // Retorna JSON de erro com status 500 (não HTML)
      return res.status(500).json({ error: erro.sqlMessage ?? String(erro) });
    });
}


function kpiUsuario(req, res) {
    // aceita tanto /kpiUsuario/:id quanto /kpiUsuario/:idUsuario
    const id = req.params.id ?? req.params.idUsuario;
    if (!id) {
        return res.status(400).json({ error: "id do usuário ausente na rota" });
    }

    usuarioModel.kpiUsuario(id)
        .then(resultado => {
            if (Array.isArray(resultado) && resultado.length > 0) {
                return res.status(200).json({ nivelTorcedor: resultado[0].nivelTorcedor ?? resultado[0].nivel ?? null });
            } else {
                return res.status(200).json({ nivelTorcedor: null });
            }
        })
        .catch(erro => {
            console.error("Erro ao obter KPI do usuário:", erro.sqlMessage ?? erro);
            res.status(500).json({ error: erro.sqlMessage ?? String(erro) });
        });
}



module.exports = {
    autenticar,
    cadastrar,
    salvarNivel,
    kpiMedia,
    kpiUsuario
};
