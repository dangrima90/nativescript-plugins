import { Component, NgZone, NO_ERRORS_SCHEMA } from '@angular/core';
import { DemoSharedGalleryView } from '@demo/shared';
import { GalleryViewLoadedEvent, ErrorEvent, OnScrolledEvent, OnClickedEvent } from '@wuilmerj24/gallery-view';

@Component({
  moduleId: module.id,
  selector: 'demo-gallery-view',
  templateUrl: 'gallery-view.component.html',
})
export class GalleryViewComponent {
  demoShared: DemoSharedGalleryView;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedGalleryView();
  }

  onLoad(args: GalleryViewLoadedEvent) {}
  onError(args: ErrorEvent) {}
  onScroll(args: OnScrolledEvent) {}

  onClick(args: OnClickedEvent) {}
}
