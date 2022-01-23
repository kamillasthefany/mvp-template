import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Card, Form, InputGroup } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget } from "./../../components/Widgets";
import { CardList } from "../../components/CardList";
import moment from "moment-timezone";
import Datetime from "react-datetime";

const lista = [
  { titulo: 'Identidade', subtitulo: 'documento_de_identidade.jpeg', id: 1, "habilitarEdicao": true },
  { titulo: 'CPF', subtitulo: 'cpf.jpeg', id: 2, "habilitarEdicao": true },
  { titulo: 'Comprovante de Endereco', subtitulo: 'comp_endereco.jpeg', id: 3, "habilitarEdicao": true },
];

export default () => {

  const [birthday, setBirthday] = useState("");
  const [clienteId, setClienteId] = useState(null);

  return (
    <>
      <br />
      <Row>
        <Col xs={12} xl={8}>
          <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
              <h5 className="mb-4">Informações Gerais</h5>
              <Form>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group id="nome">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control required type="text" placeholder="Nome" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col md={6} className="mb-3">
                    <Form.Group id="cpf">
                      <Form.Label>CPF</Form.Label>
                      <Form.Control required type="text" placeholder="CPF" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="data_nascimento">
                      <Form.Label>Data de Nascimento</Form.Label>
                      <Datetime
                        timeFormat={false}
                        onChange={setBirthday}
                        renderInput={(props, openCalendar) => (
                          <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                            <Form.Control
                              required
                              type="text"
                              value={birthday ? moment(birthday).format("DD/MM/YYYY") : ""}
                              placeholder="dd/mm/yyyy"
                              onFocus={openCalendar}
                              onChange={() => { }} />
                          </InputGroup>
                        )} />
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

                <h5 className="my-4">Endereço</h5>
                <Row>
                  <Col sm={9} className="mb-3">
                    <Form.Group id="address">
                      <Form.Label>Rua</Form.Label>
                      <Form.Control required type="text" placeholder="Rua" />
                    </Form.Group>
                  </Col>
                  <Col sm={3} className="mb-3">
                    <Form.Group id="addressNumber">
                      <Form.Label>Número</Form.Label>
                      <Form.Control required type="number" placeholder="Número" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={6} className="mb-3">
                    <Form.Group id="city">
                      <Form.Label>Cidade</Form.Label>
                      <Form.Control required type="text" placeholder="Cidade" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group id="zip">
                      <Form.Label>CEP</Form.Label>
                      <Form.Control required type="tel" placeholder="CEP" />
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
                  <Button variant="primary" type="submit" onClick={console.log('click')}>Salvar</Button>
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
                disabled={false}
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
