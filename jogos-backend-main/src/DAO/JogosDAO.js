import db from '../infra/db.js'

class JogosDAO {
    static listar() {
        const query = 'SELECT * FROM jogos';
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows)
            });
        });
    }

    static inserir(jogo) {
        const query = 'INSERT INTO jogos (nome, genero) VALUES (?, ?)';
        return new Promise((resolve, reject) => {
            db.run(query, [jogo.nome, jogo.genero], function (err) {
                if (err) {
                    reject({
                        mensagem: 'Erro ao inserir o jogo',
                        erro: err
                    })
                }

                resolve({
                    mensagem: 'Jogo criado com sucesso',
                    jogosId: this.lastID
                 })
            });
        });
    }

    static deletar(id) {
      const query = 'DELETE FROM jogos WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao deletar o jogo',
                      erro: err
                  })
              }

              resolve({ mensagem: 'Jogo deletado com sucesso' })
          });
      });
    }

    static atualizar(id, jogo) {
      const query = 'UPDATE conteudos SET nome = ?, genero = ? WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [jogo.nome, jogo.genero, id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao atualizar o jogo',
                      erro: err
                  })
              }

              resolve({ mensagem: 'Jogo atualizado com sucesso' })
          });
      });
    }
}

export default JogosDAO;