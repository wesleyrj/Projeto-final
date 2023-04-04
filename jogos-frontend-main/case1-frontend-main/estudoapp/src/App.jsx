import { Table, Container, Button } from 'react-bootstrap'
import JogosApi from './api/JogosApi'
import { useEffect, useState } from 'react'
import CreateJogosModal from './components/CreateJogosModal'
import UpdateJogosModal from './components/UpdateJogosModal'

function App() {
  const [jogos, setJogos] = useState()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [selectedJogo, setSelectedjogo] = useState()

  const handleCloseCreateModal = () => setIsCreateModalOpen(false);
  const handleShowCreateModal = () => setIsCreateModalOpen(true);

  const handleCloseUpdateModal = () => setIsUpdateModalOpen(false);
  const handleShowUpdateModal = () => setIsUpdateModalOpen(true);

  useEffect(() => {
    async function getData() {
      await JogosApi().getJogos().then(data => {
        return data.json()
      })
      .then(data => {
        setJogos(data)
      })
    }

    getData()
  }, [])

  async function deleteJogo(jogoId) {
    try {
      await JogosApi().deleteJogo(jogoId)

      const formattedJogo = contents.filter(cont => {
        if(cont.id !== jogoId){
          return cont
        }
      })

      setJogos(formattedJogos)
    } catch(err) {
      throw err
    }
  }

  async function createJogo(event) {
    try {
      event.preventDefault()

      const req = event.currentTarget.elements

      await JogosApi().createJogo(
        req.nome.value, req.genero.value
      ).then(data => {
        return data.json()
      }).then(res => {
        setJogos([...jogos, {
          id: res.jogoId,
          nome: req.nome.value,
          genero: req.genero.value
        }])

        setIsCreateModalOpen(false)
      })
    } catch(err) {
      throw err
    }
  }

  async function updateJogo(event) {
    try {
      event.preventDefault()

      const req = event.currentTarget.elements

      await JogosApi().updatejogo(
        selectedJogo.id, req.nome.value, req.genero.value
      )

      const formattedJogos = jogos.map(cont => {
        if(cont.id === selectedJogo.id) {
          return {
            id: selectedJogo.id,
            nome:  req.nome.value,
            genero: req.genero.value
          }
        }

        return cont
      })

      setJogos(formattedJogos)

      setIsUpdateModalOpen(false)
    } catch(err) {
      throw err
    }
  }

  return(
    <>
    <Container
      className="
        d-flex
        flex-column
        align-items-start
        justify-content-center
        h-100
        w-100
        "
    >
      <Button
        className="mb-2"
        onClick={handleShowCreateModal}
        variant='primary'>
        Criar Jogo
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Genero</th>
           
          </tr>
        </thead>

        <tbody>
          {jogos && jogos.map(cont => (
            <tr key={cont.id}>
              <td>{cont.nome}</td>
              <td>{cont.genero}</td>
              <td>
                <Button onClick={() => deleteJogo(cont.id)} variant='danger'>
                  Excluir
                </Button>
                <Button
                  onClick={() => {
                    handleShowUpdateModal()
                    setSelectedJogo(cont)
                  }}
                  variant='warning'
                  className='m-1'
                  >
                  Atualizar
                </Button>
              </td>

            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    <CreateJogosModal isModalOpen={isCreateModalOpen} handleClose={handleCloseCreateModal} createJogo={createJogo} />
    {selectedJogo && (
      <UpdateJogoModal isModalOpen={isUpdateModalOpen} handleClose={handleCloseUpdateModal} updateJogo={updateJogo} jogo={selectedJogo} />
    )}
    </>
  )
}

export default App
