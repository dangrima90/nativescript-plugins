import { ContentView, Observable, Utils } from '@nativescript/core';
import { EGalleryViewEvents } from './enums/events';
import { EFileType } from './enums/file_type.enum';
import { ELanguage } from './enums/language.enum';
import { IFiles } from './interfaces/files.interface';

export class GalleryViewUtil {
  public static debug: boolean = false;
}

export const CLog = (...args: any[]) => {
  if (GalleryViewUtil.debug) {
    console.log('GalleryView ---', args);
  }
};

export class GalleryViewCommon extends ContentView {
  public set debug(value: boolean) {
    GalleryViewUtil.debug = value;
  }
  public static errorEvent = EGalleryViewEvents.ErrorEvent;
  public static scrollEvent = EGalleryViewEvents.OnScrolledEvent;
  public static clickEvent = EGalleryViewEvents.OnClickedEvent;

  @GetSetProperty()
  public language: ELanguage = ELanguage.Spanish;
  @GetSetProperty()
  public file_type: EFileType = EFileType.Image;
  @GetSetProperty()
  public showHeader: boolean = true;
  @GetSetProperty()
  public bgColorHeader: string = 'red';
  @GetSetProperty()
  public textcolorHeader: string = 'blue';
  @GetSetProperty()
  public maxItemSelect: number = 1;
  @GetSetProperty()
  public showFooter: boolean = true;
  @GetSetProperty()
  public bgColorFooter: string = 'green';
  @GetSetProperty()
  public textColorFooter: string = 'black';
  @GetSetProperty()
  public edit: boolean = true;
  @GetSetProperty()
  public preview: boolean = true;
  @GetSetProperty()
  colorRadio: string = 'red';
  @GetSetProperty()
  albunInit: string = null;

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => Utils.setTimeout(resolve, ms));
  }

  public sendEvent(eventName: string, data?: any, msg?: string) {
    CLog(eventName);
    this.notify({
      eventName,
      object: this,
      data,
      message: msg,
    });
  }
}

export function GetSetProperty() {
  return (target, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get: function () {
        return this['_' + propertyKey];
      },
      set: function (value) {
        if (this['_' + propertyKey] === value) {
          return;
        }
        if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        this['_' + propertyKey] = value;
      },
      enumerable: true,
      configurable: true,
    });
  };
}
