const JogosApi = () => {
  const url = 'http://localhost:3000'

  return {
      getJogos () {
          return fetch(`${url}/jogo`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
      },
      deleteJogo (jogoId) {
        return fetch(`${url}/jogo/${jogoId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
       })
      },
      createJogo (nome, genero) {
        return fetch(`${url}/jogo`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              nome: nome,
              genero: genero
            
            }
          )
       })
      },
      updateJogo(jogoId, nome, genero) {
        return fetch(`${url}/jogo/${jogoId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              nome: nome,
              genero: genero
            
            }
          )
       })
      },
  }
}

export default JogosApi