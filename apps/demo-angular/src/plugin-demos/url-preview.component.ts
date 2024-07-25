import { Component, NgZone } from '@angular/core';
import { DemoSharedUrlPreview } from '@demo/shared';
import { } from '@wuilmerj24/url-preview';

@Component({
	selector: 'demo-url-preview',
	templateUrl: 'url-preview.component.html',
})
export class UrlPreviewComponent {
  
  demoShared: DemoSharedUrlPreview;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedUrlPreview();
  }

}