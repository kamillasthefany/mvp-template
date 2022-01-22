import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Card, Form, InputGroup } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget } from "../../components/Widgets";
import moment from "moment-timezone";
import Datetime from "react-datetime";

export default () => {

  const [birthday, setBirthday] = useState("");

  return (
    <>
      <br />
      <Row>
        <Col xs={12} xl={12}>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Novo usuário</h5>
              <Form>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="nome">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control required type="text" placeholder="Nome" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="emal">
                      <Form.Label>Email</Form.Label>
                      <Form.Control required type="email" placeholder="name@company.com" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="phone">
                      <Form.Label>Telefone</Form.Label>
                      <Form.Control required type="number" placeholder="(62)9 9900-0000" />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="mt-3">
                  <Button variant="primary" type="submit">Salvar</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
