import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGalleryView } from '@demo/shared';
import { GalleryViewLoadedEvent, OnClickedEvent, OnScrolledEvent } from '@wuilmerj24/gallery-view';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function onLoad(args: GalleryViewLoadedEvent) {
  console.log('load ');
}

export function onError(args: ErrorEvent) {
  console.log('error ');
}

export function onClick(args: OnClickedEvent) {
  console.log('click ', args.data);
}

export function onScroll(args: OnScrolledEvent) {
  console.log('scroll ');
}

export class DemoModel extends DemoSharedGalleryView {}
