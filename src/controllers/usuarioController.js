const usuarioModel = require("../models/usuarioModel");

// LOGIN
// LOGIN
async function autenticar(req, res) {
  try {
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;
    const time = req.body.timeServer;

    if (!email) return res.status(400).send("Seu email está undefined!");
    if (!senha) return res.status(400).send("Sua senha está indefinida!");

    const resultado = await usuarioModel.autenticar(email, senha, time);

    if (resultado.length === 1) {
      const usuario = resultado[0];

      return res.json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        time: usuario.fkTime
      });
    } else {
      return res.status(403).send("Email e/ou senha inválido(s)");
    }

  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ error: erro.sqlMessage || erro.message });
  }
}

// CADASTRO
async function cadastrar(req, res) {
  try {
    const nome = req.body.nomeServer;
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;
    const time = req.body.timeServer;

    if (nome == undefined) return res.status(400).send("Seu nome está undefined!");
    if (email == undefined) return res.status(400).send("Seu email está undefined!");
    if (senha == undefined) return res.status(400).send("Sua senha está undefined!");
    if (time == undefined) return res.status(400).send("Seu time está undefined!");

    const resultado = await usuarioModel.cadastrar(nome, email, senha, time);

    return res.json(resultado);

  } catch (erro) {
    console.error("Erro no cadastro:", erro);
    return res.status(500).json({ error: erro.sqlMessage ?? erro.message });
  }
}

module.exports = {
  autenticar,
  cadastrar
};
