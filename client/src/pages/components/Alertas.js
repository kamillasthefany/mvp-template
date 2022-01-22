import React, { useState } from 'react';
import { Alert, Button } from '@themesberg/react-bootstrap';

export function DismissableAlert(props) {

  const { tipo, mensagem } = props;
  const [hiddenAlerts, setHiddenAlerts] = useState([]);

  const onClose = (alertId) => {
    const hiddenAlertsUpdated = [...hiddenAlerts, alertId];
    setHiddenAlerts(hiddenAlertsUpdated);
  };

  const shouldShowAlert = (alertId) => (
    hiddenAlerts.indexOf(alertId) === -1
  );

  return (
    <Alert
      variant={tipo}
      show={shouldShowAlert(tipo)}
      onClose={() => onClose(tipo)}>

      <div className="d-flex justify-content-between">
        <div>
          {mensagem}
        </div>
        <Button variant="close" size="xs" onClick={() => onClose(tipo)} />
      </div>
    </Alert>

  );
}
