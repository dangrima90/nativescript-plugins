import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MediaEditorComponent } from './media-editor.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MediaEditorComponent }])],
  declarations: [MediaEditorComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MediaEditorModule {}
