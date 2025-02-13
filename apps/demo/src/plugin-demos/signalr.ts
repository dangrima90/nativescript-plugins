import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSignalr } from '@demo/shared';
import { Signalr } from '@wuilmerj24/signalr';
import { TypeTransport } from '@wuilmerj24/signalr/enums/types_transport.enums';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}
const signalr: Signalr = new Signalr();

export async function connect() {
  await signalr
    .create({
      // url: 'http://eaconnectionmobile.azurewebsites.net/ServicesHub',
      url: 'https://7c44-149-50-196-178.ngrok-free.app/testhub',
      shouldSkipNegotiate: false,
      headers: [{ name: 'Content-Type', value: 'application/json' }],
      transport: TypeTransport.LONG_POLLING,
      reconnect: true,
    })
    .then((res) => {
      console.log('finish ', res);
      signalr.onClose(()=>{
        alert("se desconecto "+signalr.isConnected)
      })
    })
    .catch((err) => {
      console.log('error ', err);
    });
}

export async function desconectar() {
  await signalr.disconnect();
}

export async function getStaateConn() {
  alert(signalr.isConnected);
  console.log('id', signalr.conectionId());
}

export async function invoke() {
  signalr.emit('evento', {
    ids: ['ID_1', 'ID_2']
  });
}

export async function ons() {
  signalr.on('SendNewServiceInfo', (data:Array<any>) => {
    console.log("SendNewServiceInfo",data[0]);
  });
  signalr.on('Cancel', (data) => {
    console.log("Cancel", data.expedientesCancelar[0]);
  });
  signalr.on('NotifyLogout', (data) => {
    console.log("NotifyLogout" ,data);
  });
  signalr.on('NotifyAuthorized', (data) => {
    console.log("NotifyLogout" ,data);
  });
}

export class DemoModel extends DemoSharedSignalr {}
