import { Component, NgZone } from '@angular/core';
import { DemoSharedCountryCode } from '@demo/shared';
import { Utils } from '@nativescript/core';
import { getCurrentPais, showListPaises } from '@wuilmerj24/country-code';

@Component({
  selector: 'demo-country-code',
  templateUrl: 'country-code.component.html',
})
export class CountryCodeComponent {
  demoShared: DemoSharedCountryCode;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    getCurrentPais(true).then((res) => {
      console.log('current pais ', res);
      Utils.setTimeout(async () => {
        const data = await showListPaises();
        console.log('data', data);
      }, 10000);
    });
    this.demoShared = new DemoSharedCountryCode();
  }
}
