import { Component, NgZone } from '@angular/core';
import { DemoSharedSqliteSecure } from '@demo/shared';
import {} from '@wuilmerj24/sqlite-secure';

@Component({
  selector: 'demo-sqlite-secure',
  templateUrl: 'sqlite-secure.component.html',
})
export class SqliteSecureComponent {
  demoShared: DemoSharedSqliteSecure;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSqliteSecure();
  }
}
