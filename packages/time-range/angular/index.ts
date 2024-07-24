import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { TimeRange } from '@wuilmerj24/time-range';

@NgModule()
export class NativeScriptTimeRangeModule {}

registerElement('TimeRange', () => TimeRange);
