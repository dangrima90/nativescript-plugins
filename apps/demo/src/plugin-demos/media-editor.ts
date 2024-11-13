import { Observable, EventData, Page, ScrollView, Label, StackLayout, ScrollEventData, Screen, GridLayout, Color, Utils } from '@nativescript/core';
import { DemoSharedMediaEditor } from '@demo/shared';
import {MediaEditor } from '@wuilmerj24/media-editor';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMediaEditor {
	
}
