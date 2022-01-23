
import React from "react";
import { Card } from '@themesberg/react-bootstrap';
import { MenuAcoes } from './../components/MenuAcoes';

const CardItem = (props) => {
  const { titulo, subtitulo, id, habilitarEdicao, ajusteCSS } = props;
  return (
    <div className={`d-flex align-items-center justify-content-between ${ajusteCSS}`}>
      <div>
        <h6>{titulo}</h6>
        <div className="small">
          {subtitulo}
        </div>
      </div>
      <div>
        {
          habilitarEdicao && <MenuAcoes />
        }
      </div>
    </div>
  );
}

export const CardList = (props) => {
  const { lista } = props;
  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        {lista.map((item, index) => <CardItem {...item} ajusteCSS={ajusteCSS(index, lista)} key={`id-${item.id}`} />)}
      </Card.Body>
    </Card>
  );
};

const ajusteCSS = (indexLista, lista) => {
  if (indexLista === 0)
    return 'border-bottom border-light pb-3';
  if (lista.length - 1 === indexLista)
    return 'pt-3';

  return 'border-bottom border-light py-3';
}
