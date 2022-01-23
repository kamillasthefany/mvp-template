
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import { CardList } from "../../components/CardList";

const lista = [
  { titulo: 'Daiane dos Santos', subtitulo: '10 vendas no último mês', id: 3, "habilitarEdicao": false },
  { titulo: 'João da Silva', subtitulo: '5 vendas no último mês', id: 1 },
  { titulo: 'John Smith', subtitulo: '3 vendas no último mês', id: 2 },
];

export default () => {
  return (
    <>
      <br />
      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget
            title="Vendas"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Vendas"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Clientes"
            title="345k"
            period="01/01 à 20/01"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Vendas"
            title="R$43,594"
            period="01/01 à 20/01"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          {/* <RankingWidget /> */}
          <CardList lista={lista} />
        </Col>
      </Row>
    </>
  );
};
