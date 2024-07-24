import { EventData } from '@nativescript/core';
import { EGalleryViewEvents } from '../enums/events';
import { IFiles } from './files.interface';
import { GalleryView } from '..';

export interface ErrorEvent extends EventData {
  eventName: EGalleryViewEvents.ErrorEvent;
  data?: Error;
  message?: string;
}

export interface OnScrolledEvent extends EventData {
  eventName: EGalleryViewEvents.OnScrolledEvent;
  data: Array<IFiles>;
}

export interface OnClickedEvent extends EventData {
  eventName: EGalleryViewEvents.OnClickedEvent;
  data: Array<IFiles>;
}

export interface GalleryViewLoadedEvent extends EventData {
  eventName: 'loaded';
  data: any;
  object: GalleryView;
}
