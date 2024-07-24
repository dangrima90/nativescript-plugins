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
      url: 'url',
      shouldSkipNegotiate: false,
      headers: [{ name: 'Content-Type', value: 'application/json' }],
      transport: TypeTransport.WEBSOCKETS,
      reconnect: true,
    })
    .then((res) => {
      console.log('finish ', res);
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
  signalr.emit('evento', null);
}

export async function ons() {
  signalr.on('SendNewServiceInfo', (data) => {
    console.log(data);
  });
}

export class DemoModel extends DemoSharedSignalr {}
