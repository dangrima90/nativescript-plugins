import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SignalrComponent } from './signalr.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SignalrComponent }])],
  declarations: [SignalrComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SignalrModule {}
