import { Component, NgZone } from '@angular/core';
import { DemoSharedMediaEditor } from '@demo/shared';
import { } from '@wuilmerj24/media-editor';

@Component({
	selector: 'demo-media-editor',
	templateUrl: 'media-editor.component.html',
})
export class MediaEditorComponent {
  
  demoShared: DemoSharedMediaEditor;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMediaEditor();
  }

}