import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SqliteSecureComponent } from './sqlite-secure.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SqliteSecureComponent }])],
  declarations: [SqliteSecureComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SqliteSecureModule {}
