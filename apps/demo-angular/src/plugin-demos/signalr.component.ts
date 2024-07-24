import { Component, NgZone } from '@angular/core';
import { DemoSharedSignalr } from '@demo/shared';
import {} from '@wuilmerj24/signalr';

@Component({
  selector: 'demo-signalr',
  templateUrl: 'signalr.component.html',
})
export class SignalrComponent {
  demoShared: DemoSharedSignalr;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSignalr();
  }
}
