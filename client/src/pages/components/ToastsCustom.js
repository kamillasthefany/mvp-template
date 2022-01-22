
import React, { useState } from 'react';
import { Toast, Button } from '@themesberg/react-bootstrap';

export default (props) => {

  const { tipo, titulo, mensagem } = props;
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <Toast show={show} onClose={handleClose} className="my-3">
      <Toast.Header closeButton={false}>
        <strong className="me-auto ms-2 text-success">{titulo}</strong>
        <Button variant="close" size="xs" onClick={handleClose} />
      </Toast.Header>
      <Toast.Body className="alert-success">
        <strong>
          {mensagem}
        </strong>
      </Toast.Body>
    </Toast >
  );
};
