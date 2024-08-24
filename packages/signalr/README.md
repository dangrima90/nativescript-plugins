<a href="https://www.npmjs.com/package/@wuilmerj24/signalr">
    <img src="https://img.shields.io/npm/dt/@wuilmerj24/signalr.svg?label=npm%20downloads" alt="npm">
</a>

# @wuilmerj24/signalr

```javascript
npm install @wuilmerj24/signalr
```

## Api
| Method | Params | Return |
| ------ | ------ | ------ |
| create | OptionsConnect | ```Promise``` |
| disconnect | | ```void``` |
| conectionId | | ```string``` |
| on | eventName:```sting```,```callback: (...payload: any[])``` | ```void``` |
| off | eventName:```sting``` | ```void``` |
| onClose | | Fired close connection |
| emit | eventName:```sting```,```callback: (...payload: any[])``` | ```void``` |
| isConnected | | ```EStateConn``` |

## Interfaces
```typescript 
export interface OptionsConnect {
  url: string;
  accessToken?: string;
  shouldSkipNegotiate?: boolean;
  headers?: Array<IHeaders>;
  handshakeResponseTimeout?: number;
  keepAliveInterval?: number;
  serverTimeout?: number;
  transport?: TypeTransport;
  reconnect?: boolean;
}
```

## Enums 
```typescript
export enum TypeTransport {
  ALL = 'ALL',
  WEBSOCKETS = 'WEBSOCKETS',
  LONG_POLLING = 'LONG_POLLING',
}

export enum EStateConn {
  CONNECTED = 'CONNECTED',
  CONNECTING = 'CONNECTING',
  DISCONNECTED = 'DISCONNECTED',
}
```

### examples

```typescript
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
      signalr.onClose(() => {
        console.log();
      });
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
  console.log("id",signalr.conectionId());
}

export async function invoke() {
  signalr.emit('evento', null);
}

export async function ons() {
  signalr.on('evento', (data) => {
    console.log(data);
  });
}

```

## License

Apache License Version 2.0
