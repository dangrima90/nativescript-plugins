import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { UrlPreviewComponent } from './url-preview.component';
@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: UrlPreviewComponent }])],
  declarations: [UrlPreviewComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class UrlPreviewModule {}
