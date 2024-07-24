import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GalleryViewComponent } from './gallery-view.component';
import { NativeScriptGalleryViewModule } from '@wuilmerj24/gallery-view/angular';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: GalleryViewComponent }]), NativeScriptGalleryViewModule],
  declarations: [GalleryViewComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class GalleryViewModule {}
