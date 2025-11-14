const usuarioModel = require("../models/usuarioModel");

// LOGIN
async function autenticar(req, res) {
  try {
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;

    if (email == undefined) {
      return res.status(400).send("Seu email está undefined!");
    }
    if (senha == undefined) {
      return res.status(400).send("Sua senha está undefined!");
    }

    // procura o usuário pelo email e senha (SEM HASH)
    const resultadoAutenticar = await usuarioModel.autenticar(email, senha);

    console.log("Resultados: ", resultadoAutenticar);

    if (resultadoAutenticar.length === 1) {
      const usuario = resultadoAutenticar[0];

      // como a senha não é hash, só comparar diretamente
      if (usuario.senha !== senha) {
        return res.status(403).send("Email e/ou senha inválido(s)");
      }

      return res.json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      });

    } else if (resultadoAutenticar.length === 0) {
      return res.status(403).send("Email e/ou senha inválido(s)");
    } else {
      return res.status(403).send("Mais de um usuário com o mesmo login e senha!");
    }

  } catch (erro) {
    console.error("Erro no login:", erro);
    return res.status(500).json({ error: erro.sqlMessage ?? erro.message });
  }
}

// CADASTRO
async function cadastrar(req, res) {
  try {
    const nome = req.body.nomeServer;
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;

    if (nome == undefined) return res.status(400).send("Seu nome está undefined!");
    if (email == undefined) return res.status(400).send("Seu email está undefined!");
    if (senha == undefined) return res.status(400).send("Sua senha está undefined!");

    // salva senha normal, sem hash
    const resultado = await usuarioModel.cadastrar(nome, email, senha);

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
