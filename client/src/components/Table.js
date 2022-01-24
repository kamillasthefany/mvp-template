
import React, { useEffect, useState } from "react";
import { Nav, Card, Table, Pagination } from '@themesberg/react-bootstrap';
import transactions from "../data/transactions";

export const Tabela = (props) => {

  const totalTransactions = transactions.length;

  const { dados } = props;

  useEffect(() => {
    tratarDados();
  }, [dados]);

  const [tableRows, setTableRows] = useState([]);
  const [tableTitles, setTableTitles] = useState([]);

  const tratarDados = async () => {
    if (dados?.length > 0) {
      let listaFinal = [];
      let listaDeTitulos = [];

      const primeiroElemento = dados[0];

      for (const prop in primeiroElemento) {
        listaDeTitulos.push(prop);
      }

      setTableTitles(listaDeTitulos);

      dados?.map((item) => {
        let elemento = [];
        Object.entries(item).forEach(([prop, value]) => {
          elemento.push(value);
        });
        listaFinal.push(elemento);
      });

      setTableRows(listaFinal);
    }
  };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              {tableTitles?.map((t, index) => <th className="border-bottom" key={`title-${t}-${index}`}>{t}</th>)}
            </tr>
          </thead>
          <tbody>
            {tableRows?.map((prop, key) => {
              return (
                <tr key={key}>
                  {prop.map((prop, key) => {
                    return (
                      <td key={key}>
                        <span className="fw-normal">
                          {prop}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}

          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination className="mb-2 mb-lg-0">
              <Pagination.Prev>
                Anterior
              </Pagination.Prev>
              <Pagination.Item active>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Next>
                Próxima
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Mostrando <b>{totalTransactions}</b> de <b>25</b> registros
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};