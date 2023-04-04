import { Modal, Button, Form } from 'react-bootstrap'
function UpdateJogosModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.isModalOpen}>
        <Form onSubmit={(event) => {
          props.updateJogo(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Atualizar Jogo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="nome">
            <Form.Label>
              Nome
            </Form.Label>
            <Form.Control defaultValue={props.jogo.nome} type="text" />
          </Form.Group>

          <Form.Group controlId="genero">
            <Form.Label>
              Genero
            </Form.Label>
            <Form.Control defaultValue={props.jogo.genero} type="text" />
          </Form.Group>

        
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div>
  )
}

export default UpdateJogosModal
