const graficosModel = require("../models/graficosModel");

// Gráficos
async function buscarTimes(req, res) {
  try {
    const resultado = await graficosModel.buscarTimes();
    if (Array.isArray(resultado) && resultado.length > 0) {
      return res.status(200).json(resultado);
    }
    // sem dados
    return res.status(200).json([]); // ou res.status(204).end();
  } catch (erro) {
    console.error("Erro ao buscar times:", erro);
    // não enviar erro do SQL inteiro ao cliente
    return res.status(500).json({ message: "Erro interno ao buscar times." });
  }
}

async function buscarDadosNivelTorcedor(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ message: "ID inválido." });

  try {
    console.log(`Recuperando dados de nível do torcedor para id=${id}`);
    const resultado = await graficosModel.buscarDadosNivelTorcedor(id);

    if (Array.isArray(resultado) && resultado.length > 0) {
      return res.status(200).json(resultado);
    }
    return res.status(200).json([]); // ou 204
  } catch (erro) {
    console.error("Houve um erro ao buscar o nivel do torcedor:", erro);
    return res.status(500).json({ message: "Erro interno ao buscar dados do nível do torcedor." });
  }
}

// KPIs
async function buscarNivelTorcedor(req, res) {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ message: "ID inválido." });

  try {
    console.log(`Recuperando KPI nível do torcedor para id=${id}`);
    const resultado = await graficosModel.buscarNivelTorcedor(id);

    if (Array.isArray(resultado) && resultado.length > 0) {
      return res.status(200).json(resultado);
    }
    return res.status(200).json([]); // ou 204
  } catch (erro) {
    console.error("Houve um erro ao buscar o nivel do torcedor (KPI):", erro);
    return res.status(500).json({ message: "Erro interno ao buscar KPI do nível do torcedor." });
  }
}

module.exports = {
  buscarTimes,
  buscarNivelTorcedor,
  buscarDadosNivelTorcedor
};
