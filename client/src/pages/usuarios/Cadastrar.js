import React, { useState } from "react";
import { Col, Row, Button, Card, Form } from '@themesberg/react-bootstrap';
//import { useCadastrarUsuario } from './../../queries/user';
import { cadastro } from "../../services/user";
import { DismissableAlert } from './../components/Alertas';
import ToastCustom from './../components/ToastsCustom';


export default () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNome = (evt) => {
    setNome(evt.target.value);
  }

  const handleSenha = (evt) => {
    setSenha(evt.target.value);
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }

  async function cadastrarUsuario(evt) {
    const usuario = { nome, email, senha };
    const result = await cadastro(usuario);
    if (result.status === 200) {
      console.log('sucesso');
    } else {
      console.log('Email ou senha invalidos');
    }
  }

  return (
    <>
      <br />
      <Row>
        <Col xs={12} xl={12}>
          <DismissableAlert tipo="success" mensagem="Sucesso! Usuário cadastrado." />
          {/* <ToastCustom tipo="success" titulo="Sucesso" mensagem="Usuário cadastrado." /> */}
        </Col>
      </Row>
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
                      <Form.Control required type="text" placeholder="Nome" onChange={handleNome} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group id="emal">
                      <Form.Label>Email</Form.Label>
                      <Form.Control required type="email" placeholder="nome@email.com" onChange={handleEmail} />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group id="password">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control required type="password" defaultValue="teste" onChange={handleSenha} />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="mt-3">
                  <Button variant="primary" type="submit" onClick={cadastrarUsuario}>Salvar</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
