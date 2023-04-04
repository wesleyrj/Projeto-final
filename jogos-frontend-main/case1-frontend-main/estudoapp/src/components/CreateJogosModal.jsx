import { Modal, Button, Form } from 'react-bootstrap'
function CreateJogosModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.isModalOpen}>
        <Form onSubmit={(event) => {
          props.createJogo(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Criar Jogo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="nome">
            <Form.Label>
              Nome
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="genero">
            <Form.Label>
              Genero
            </Form.Label>
            <Form.Control type="text" />
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

export default CreateJogosModal
