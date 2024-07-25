import { SignalrCommon } from './common';
import { EStateConn } from './enums/states_conn.enums';
import { TypeTransport } from './enums/types_transport.enums';
import { OptionsConnect } from './interfaces/conn_options.interface';
import { Utils } from '@nativescript/core';

export class Signalr extends SignalrCommon {
	protected signalr: com.microsoft.signalr.HubConnection;
	private options:OptionsConnect;

	async create(options: OptionsConnect): Promise<any> {
		this.options=options;
		return new Promise(async (rs, rj) => {
			try {
				this.isConnected = EStateConn.CONNECTING;
				const builder = com.microsoft.signalr.HubConnectionBuilder.create(options.url);
				if (options.shouldSkipNegotiate) {
				builder.shouldSkipNegotiate(options.shouldSkipNegotiate);
				}

				if (options.accessToken) {
				builder.withAccessTokenProvider(
					io.reactivex.rxjava3.core.Single.defer(
					new io.reactivex.rxjava3.functions.Supplier<any>({
						get() {
						return io.reactivex.rxjava3.core.Single.just(options.accessToken);
						},
					})
					)
				);
				}

				if (options.headers) {
				const headers: java.util.Map<string, string> = new java.util.HashMap<string, string>();

				for (let i: number = 0; i < options.headers.length; i++) {
					headers.put(options.headers[i].name, options.headers[i].value);
				}
				builder.withHeaders(headers);
				}

				if (options.handshakeResponseTimeout) {
				builder.withHandshakeResponseTimeout(options.handshakeResponseTimeout);
				}

				if (options.keepAliveInterval) {
				builder.withKeepAliveInterval(options.keepAliveInterval);
				}

				if (options.transport) {
				let transport: com.microsoft.signalr.TransportEnum = options.transport;
				switch (options.transport) {
					case TypeTransport.ALL:
					transport = com.microsoft.signalr.TransportEnum.ALL;
					break;
					case TypeTransport.LONG_POLLING:
					transport = com.microsoft.signalr.TransportEnum.LONG_POLLING;
					break;
					case TypeTransport.WEBSOCKETS:
					transport = com.microsoft.signalr.TransportEnum.WEBSOCKETS;
					break;
					default:
					transport = com.microsoft.signalr.TransportEnum.WEBSOCKETS;
					break;
				}
				builder.withTransport(transport);
				}
				this.signalr = builder.build();

				const self = this;
				await this.signalr.start().subscribe(
				new io.reactivex.rxjava3.functions.Action({
					run() {
					self.isConnected = self.getConnectionState(self.signalr.getConnectionState());
					rs(self.signalr);
					},
				}),
				new io.reactivex.rxjava3.functions.Consumer<any>({
					accept(param0: java.lang.Throwable) {
					rj(param0.getMessage());
					},
				})
				);
				
			} catch (error) {
				console.log(error);
				rj(error);
			}
		});
	}

	private getConnectionState(state: com.microsoft.signalr.HubConnectionState): EStateConn {
		if (state == com.microsoft.signalr.HubConnectionState.DISCONNECTED) {
		return EStateConn.DISCONNECTED;
		} else if (state == com.microsoft.signalr.HubConnectionState.CONNECTED) {
		return EStateConn.CONNECTED;
		} else if (state == com.microsoft.signalr.HubConnectionState.DISCONNECTED) {
		return EStateConn.DISCONNECTED;
		} else {
		return EStateConn.DISCONNECTED;
		}
	}

	disconnect(): void {
		if (this.isConnected == EStateConn.CONNECTED) {
		this.signalr.stop();
		}
	}

	conectionId(): string {
		return this.signalr.getConnectionId();
	}

	on(event: string, callback: (...payload) => void): () => void {
		// @ts-ignore
		this.signalr.on(
		event,
		new com.microsoft.signalr.Action1({
			invoke(param0) {
			console.log(param0);
			callback.apply(null, []);
			},
		}),
		java.lang.Object.class
		);
		return () => {
		// @ts-ignore
		this.signalr.remove(event);
		};
	}

	off(event: string) {
		// @ts-ignore
		this.signalr.remove(event);
	}

	emit(event: string, ...payload: any[]) {
		if (!event) {
		throw Error('Emit Failed: No Event argument');
		}
		this.signalr.send(event, payload);
	}
	
	onClose(callback: () => void): () => void {
		const self=this;
		this.signalr.onClosed(
			new com.microsoft.signalr.OnClosedCallback({
				invoke(param0: java.lang.Exception) {
					self.isConnected = self.getConnectionState(self.signalr.getConnectionState());
					console.log("STATE ", self.isConnected);
					if (self.options.reconnect) {
						let intervalo;
						intervalo = Utils.setInterval(async () => {
							self.isConnected = self.getConnectionState(self.signalr.getConnectionState());
							console.log("STATE reconnecting... ", self.isConnected);
							if (self.signalr.getConnectionState() == com.microsoft.signalr.HubConnectionState.DISCONNECTED) {
								await self.create(self.options);
							} else {
								self.isConnected = self.getConnectionState(self.signalr.getConnectionState());
								console.log("STATE connected... ", self.isConnected);
								Utils.clearInterval(intervalo);
								callback();
							}
						}, 5000);
					}else{
						callback();
					}

				},
			})
		);
		return () => {

		}
	}
}
