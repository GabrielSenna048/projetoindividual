const usuarioModel = require("../models/usuarioModel");
const cornthiansModel = require("../models/corinthiansModel");
const bcrypt = require("bcryptjs"); 

// autenticar
async function autenticar(req, res) {
  try {
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;

    if (email == undefined) {
      return res.status(400).send("Seu email está undefined!");
    }
    if (senha == undefined) {
      return res.status(400).send("Sua senha está indefinida!");
    }

    // chama o model para buscar o usuário pelo email
    // Recomendo que usuarioModel.autenticarRetornaPorEmail(email) retorne: id, nome, email, senha_hash, fk_quiz
    // Mas aqui eu uso usuarioModel.autenticar(email, senha) mantendo compatibilidade com o que você já tinha.
    const resultadoAutenticar = await usuarioModel.autenticar(email, senha);

    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

    if (resultadoAutenticar.length === 1) {
      const usuario = resultadoAutenticar[0];

      // segurança: não enviar senha de volta no JSON
      // lidar com senhas: se o banco já guarda hash, use bcrypt.compare
      let senhaValida = false;

      // se o model já fez a verificação por senha (retornando o usuário somente se senha válida),
      // assumimos que está ok. Contudo, para robustez, tentamos comparar localmente:
      if (usuario.senha) {
        // Se o banco armazenou hash (começa com $2a$/$2b$/$2y$), tente bcrypt.compare
        if (/^\$2[aby]\$/.test(usuario.senha)) {
          senhaValida = await bcrypt.compare(senha, usuario.senha);
        } else {
          // fallback (caso o banco esteja armazenando senha em plain text - não recomendado)
          senhaValida = senha === usuario.senha;
        }
      } else if (usuario.senha_hash) {
        senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
      } else {
        // Se o model já validou e retornou o usuário, consideramos válido.
        // Mas para segurança, preferimos falhar explicitamente:
        console.warn("Usuário retornado sem campos de senha para validação local.");
        senhaValida = true;
      }

      if (!senhaValida) {
        return res.status(403).send("Email e/ou senha inválido(s)");
      }

      // buscar corinthians vinculados ao fk_quiz do usuário
      // observação: aqui assumimos que o campo no usuário é fk_quiz (ou quizId). 
      // Ajuste conforme o retorno real do seu model.
      const fkQuiz = usuario.fk_quiz ?? usuario.quizId ?? usuario.quiz_id;

      if (fkQuiz == null) {
        // se não existe fk_quiz, retornar usuário sem corinthians or 204
        return res.json({
          id: usuario.id,
          email: usuario.email,
          nome: usuario.nome,
          corinthians: []
        });
      }

      const resultadoCorinthians = await corinthiansModel.buscarCorinthiansPorEmpresa(fkQuiz);

      if (resultadoCorinthians && resultadoCorinthians.length > 0) {
        return res.json({
          id: usuario.id,
          email: usuario.email,
          nome: usuario.nome,
          corinthians: resultadoCorinthians
        });
      } else {
        return res.status(204).json({ corinthians: [] });
      }
    } else if (resultadoAutenticar.length === 0) {
      return res.status(403).send("Email e/ou senha inválido(s)");
    } else {
      return res.status(403).send("Mais de um usuário com o mesmo login e senha!");
    }
  } catch (erro) {
    console.error(erro);
    console.error("Houve um erro ao realizar o login! Erro: ", erro.sqlMessage || erro.message);
    return res.status(500).json({ error: erro.sqlMessage ?? erro.message });
  }
}

// cadastrar
async function cadastrar(req, res) {
  try {
    const nome = req.body.nomeServer;
    const email = req.body.emailServer;
    const senha = req.body.senhaServer;
    const fkQuiz = req.body.idEmpresaVincularServer; // campo vindo do front

    if (nome == undefined) {
      return res.status(400).send("Seu nome está undefined!");
    }
    if (email == undefined) {
      return res.status(400).send("Seu email está undefined!");
    }
    if (senha == undefined) {
      return res.status(400).send("Sua senha está undefined!");
    }
    if (fkQuiz == undefined) {
      return res.status(400).send("Seu quiz está undefined!");
    }

    // Hash da senha antes de salvar (bcrypt)
    const saltRounds = 10;
    const senhaHash = await bcrypt.hash(senha, saltRounds);

    // chame o model para cadastrar e passe o fkQuiz também
    // Recomendo que usuarioModel.cadastrar aceite (nome, email, senhaHash, fkQuiz)
    const resultado = await usuarioModel.cadastrar(nome, email, senhaHash, fkQuiz);

    // não retornar senha/hash no JSON
    return res.json(resultado);
  } catch (erro) {
    console.error(erro);
    console.error("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage || erro.message);
    return res.status(500).json({ error: erro.sqlMessage ?? erro.message });
  }
}

module.exports = {
  autenticar,
  cadastrar
};
