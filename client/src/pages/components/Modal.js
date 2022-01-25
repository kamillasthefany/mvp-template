import React, { useState } from "react";
import { Button, Modal } from '@themesberg/react-bootstrap';


export default () => {
  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);

  return (<React.Fragment>
    <Button variant="primary" className="my-3" onClick={() => setShowDefault(true)}>Default</Button>

    <Modal as={Modal.Dialog} centered show={showDefault} size={"lg"} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="h6">Terms of Service</Modal.Title>
        <Button variant="close" aria-label="Close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <div>
          <tr>
            <td><span className="fw-normal">Nome</span></td>
            <td><span className="fw-normal">CPF</span></td>
          </tr>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          I Got It
        </Button>
        <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </React.Fragment>)
};