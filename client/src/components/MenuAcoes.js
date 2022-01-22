import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsisH, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

export const MenuAcoes = () => {
  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
        <span className="icon icon-sm">
          <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <FontAwesomeIcon icon={faEye} className="me-2" /> Detalhes
        </Dropdown.Item>
        <Dropdown.Item>
          <FontAwesomeIcon icon={faEdit} className="me-2" /> Editar
        </Dropdown.Item>
        <Dropdown.Item className="text-danger">
          <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Excluir
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};