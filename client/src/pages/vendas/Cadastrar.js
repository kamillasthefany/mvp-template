import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Card, Form, InputGroup } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget } from "./../../components/Widgets";
import moment from "moment-timezone";
import Datetime from "react-datetime";

export default () => {

  const [birthday, setBirthday] = useState("");

  return (
    <>
      <br />
      <Row>
        <Col xs={12} xl={8}>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Nova venda</h5>
              <Form>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="nome">
                      <Form.Label>Cliente</Form.Label>
                      <Form.Control required type="text" placeholder="Nome" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Group>
                      <Form.Label>Observações</Form.Label>
                      <Form.Control as="textarea" rows="4" placeholder="Enter your message..." />
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

        <Col xs={12} xl={4}>
          <Row>
            {/* <Col xs={12}>
              <ProfileCardWidget />
            </Col> */}
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Enviar documentos"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
