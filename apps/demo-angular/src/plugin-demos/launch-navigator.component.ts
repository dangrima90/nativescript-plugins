import { Component, NgZone } from '@angular/core';
import { DemoSharedLaunchNavigator } from '@demo/shared';
import {} from '@wuilmerj24/launch-navigator';

@Component({
  selector: 'demo-launch-navigator',
  templateUrl: 'launch-navigator.component.html',
})
export class LaunchNavigatorComponent {
  demoShared: DemoSharedLaunchNavigator;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedLaunchNavigator();
  }
}
