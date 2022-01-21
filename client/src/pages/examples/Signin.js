
import React, { useState, useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';

import { Routes } from "../../routes";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { authenticate } from '../../services/auth';
import { AuthContext } from "../../contexts/authContext";


export default () => {

  const history = useHistory();
  const [user, setUser] = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSenha = (evt) => {
    setSenha(evt.target.value);
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }

  const redirectUserLogged = () => {
    history.push('/dashboard');
  };

  async function efetuarLogin(evt) {
    evt.preventDefault();

    const usuario = { email, senha };

    const result = await authenticate(usuario);
    if (result.status === 200) {
      const auth = {
        user: result.data.usuario,
        token: result.data.token,
      };
      if (user) {
        setUser(prevState => ({ ...prevState, auth }));
        redirectUserLogged();
      }
    } else {
      //incluir loading
      console.log('Email ou senha invalidos');
    }
  }

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Voltar para a página inicial
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Login</h3>
                </div>
                <Form className="mt-4">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" placeholder="example@company.com" onChange={handleEmail} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Senha</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Password" onChange={handleSenha} />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Lembrar</FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">Esqueceu a senha?</Card.Link>
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100" onClick={efetuarLogin}>
                    Entrar
                  </Button>
                </Form>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Ainda não é cadastrado?
                    <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">
                      {` Crie uma conta `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
