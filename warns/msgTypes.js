import { WarnMsg } from './warnMsg';
import React from 'react';
import { AlarmeBtns, WhatsBtns, AlertBtns, DeleteBtns } from './buttons';


export const WhatsMsg = () => {
  return (
    <>
      <WarnMsg
        color="#2AB200"
        title="AVISO"
        msg="Mensagem foi enviada para {nomeContato}!"
        imgURL="https://files.softicons.com/download/android-icons/flat-icons-by-martz90/png/64x64/whatsapp.png"
        buttons={{style: React.createElement(WhatsBtns)}}
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
        imgURL="https://pics.freeicons.io/uploads/icons/png/4284390491586786154-512.png"
        buttons={{style: React.createElement(AlertBtns)}}
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
      buttons={{style: React.createElement(AlarmeBtns)}}
      subMsg="Consumir unidade?"
      imgURL="https://pics.freeicons.io/uploads/icons/png/17071946331536922358-512.png">
      </WarnMsg>
    </>
  )
}

export const DeleteMsg = () => {
  return (
    <>
      <WarnMsg
        color="#C8CDCB"
        title="EXCLUIR ITEM"
        msg="Tem certeza que deseja excluir 1 item?"
        imgURL="https://i.ibb.co/n0FtrbD/danger-1.png"
        buttons={{style: React.createElement(DeleteBtns)}}
      >
      </WarnMsg>
    </>
  ) 
}