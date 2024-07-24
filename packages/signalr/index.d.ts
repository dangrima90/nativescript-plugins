import { SignalrCommon } from './common';
import { OptionsConnect } from './interfaces/conn_options.interface';
import { EStateConn } from './enums/states_conn.enums';

export declare class Signalr extends SignalrCommon {
  protected signalr: any;
  isConnected: EStateConn;
  create(options: OptionsConnect): Promise<any>;
  disconnect(): void;
  conectionId(): string;
  on(event: string, callback: (...payload: any[]) => void): () => void;
  off(event: string): void;
  emit(event: string, ...payload: any[]): void;
}
