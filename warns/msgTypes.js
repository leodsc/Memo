import { WarnMsg } from './warnMsg';
import React from 'react';

export const WhatsMsg = () => {
  return (
    <>
      <WarnMsg
        color="#2AB200"
        title="AVISO"
        msg="Mensagem foi enviada para {nomeContato}!"
        img="true"
      >
      </WarnMsg>
    </>
  )
}

// componente alerta
export const AlertMsg = () => {
  return (
    <>
      <WarnMsg
        color="red"
        title="ALERTA"
        msg="Quantidade de {nomeRemedio} está abaixo de 20%"
      >
      </WarnMsg>
    </>
  )
}

// componente de alarme
export const AlarmeMsg = () => {
  return (
    <>
      <WarnMsg
      color="#12263A"
      title="ALARME"
      msg="{Horário}-{Remédio}"
      subMsg="Consumir unidade?">
      </WarnMsg>
    </>
  )
}