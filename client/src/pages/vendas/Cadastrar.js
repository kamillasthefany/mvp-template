import React, { useState } from "react";
import { Col, Row, Button, Card, Form, InputGroup } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget } from "./../../components/Widgets";
import { CardList } from "../../components/CardList";

export default () => {

  const [birthday, setBirthday] = useState("");

  const lista = [
    { titulo: 'Contrato de Venda', subtitulo: 'contrato_venda_joao.jpeg', id: 1, "habilitarEdicao": true },
    { titulo: 'Scam Passagens Aéreas', subtitulo: 'passagens_joao.pdf', id: 2, "habilitarEdicao": true },
  ];

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
                      <Form.Control as="textarea" rows="4" placeholder="Digite uma mensagem..." />
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
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Enviar documentos"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardList lista={lista} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
