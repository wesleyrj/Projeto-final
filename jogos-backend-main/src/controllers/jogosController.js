import JogosDAO from "../DAO/JogosDAO.js"

class jogosController {
  static rotas(app){
    app.get('/jogo', jogosController.listar)
    app.post('/jogo', jogosController.inserir)
    app.delete('/jogo/:id', jogosController.deletar)
    app.put('/jogo/:id', jogosController.atualizar)
  }

  static async listar(req, res){
    const jogos = await JogosDAO.listar()

    res.send(jogos)
  }

  static async inserir(req, res){
    const jogo = {
      nome: req.body.nome,
      genero: req.body.genero
    }

    const result = await JogosDAO.inserir(jogo)

    if(result.erro) {
      res.status(500).send(result)
    }

    res.send(result)
  }

  static async deletar(req, res){
    const jogo = await JogosDAO.deletar(req.params.id)

    if(jogo.erro){
        res.status(500).send('Erro ao deletar o jogo')
    }

    res.send({mensagem: 'Jogo removido com sucesso'})
  }

  static async atualizar(req, res){
    const jogo = {
      nome: req.body.nome,
      genero: req.body.genero
    }

    const result = await ContentsDAO.atualizar(req.params.id, conteudo)

    if(result.erro){
        res.status(500).send('Erro ao atualizar o jogo')
    }

    res.send({mensagem: 'Jogo alterado com sucesso'})
  }
}

export default jogosController