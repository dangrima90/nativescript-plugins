import { Application, Button, Color, ContentView, Device, EventData, Frame, GestureEventData, GestureTypes, GridLayout, GridUnitType, Image, ItemSpec, Label, Screen, ShowModalOptions, StackLayout, TabView, TabViewItem, TapGestureEventData, Utils, action, getCurrentPage } from '@nativescript/core';
import { LanguageController } from './class/language.class';
import { CLog, GalleryViewCommon, GetSetProperty } from './common';
import { EFileType } from './enums/file_type.enum';
import { ELanguage } from './enums/language.enum';
import { IFileData, IFiles } from './interfaces/files.interface';
import { MediaStoreForiOS } from './class/mediastore.ios';
import { layout } from '@nativescript/core/utils';

export class GalleryView extends GalleryViewCommon {
  @GetSetProperty()
  public language: ELanguage;
  @GetSetProperty()
  public file_type: EFileType;
  @GetSetProperty()
  public showHeader: boolean;
  @GetSetProperty()
  public bgColorHeader: string;
  @GetSetProperty()
  public textcolorHeader: string;
  @GetSetProperty()
  public maxItemSelect: number;
  @GetSetProperty()
  public showFooter: boolean;
  @GetSetProperty()
  public bgColorFooter: string;
  @GetSetProperty()
  public textColorFooter: string;
  @GetSetProperty()
  public edit: boolean;
  @GetSetProperty()
  public preview: boolean;
  @GetSetProperty()
  colorRadio: string;
  @GetSetProperty()
  albunInit: string;

  // VARIABLES locals
  private idioma: LanguageController;
  createNativeView(): Object {
    this.idioma = new LanguageController(this.language);
    this.nativeView = UIView.alloc().init();
    (this.nativeView as UIView).frame = CGRectMake(0, 0, Screen.mainScreen.widthDIPs, Screen.mainScreen.heightDIPs);
    (this.nativeView as UIView).backgroundColor = UIColor.blackColor;
    return this.nativeView;
  }

  async onLoaded() {
    super.onLoaded();
    const ref = new WeakRef(this);
    const galleryView: NSCSwiftGalleryView = NSCSwiftGalleryView.new();
    const view: UIView = galleryView.makeViewWithShowHeaderBgColorHeaderTextcolorHeaderMaxItemSelectShowFooterBgColorFooterTextColorFooterPreviewEditTituloBtnPreviewTituloBtnEditColorRadio(this.showHeader ? 1 : 0, new Color(this.bgColorHeader).ios, new Color(this.textcolorHeader).ios, this.maxItemSelect, this.showFooter ? 1 : 0, new Color(this.bgColorFooter).ios, new Color(this.textColorFooter).ios, this.preview ? 1 : 0, this.edit ? 1 : 0, this.idioma.getTranslation('titulo_btn_preview'), this.idioma.getTranslation('titulo_btn_edit'), new Color(this.colorRadio).ios);

    galleryView.onErrorCallBack = (p1: NSArray<any>) => {
      const data: Array<IFiles> = this.deserialize(p1);
      if (data.length <= 0) {
        const msj: UILabel = UILabel.alloc().init();
        msj.text = this.idioma.getTranslation('no_items');
        msj.textColor = UIColor.labelColor;
        msj.backgroundColor = UIColor.lightGrayColor;
        msj.font = UIFont.boldSystemFontOfSize(24);
        (this.nativeView as UIView).addSubview(msj);
        msj.translatesAutoresizingMaskIntoConstraints = false;
        NSLayoutConstraint.activateConstraints([msj.centerXAnchor.constraintEqualToAnchor((this.nativeView as UIView).centerXAnchor), msj.centerYAnchor.constraintEqualToAnchor((this.nativeView as UIView).centerYAnchor)]);
        (this.nativeView as UIView).addSubview(msj);
      }
      ref?.get()?.sendEvent(GalleryView.errorEvent, []);
    };

    galleryView.onLoadCallback = (p1: NSArray<any>) => {
      const data: Array<IFiles> = this.deserialize(p1);
      ref?.get()?.sendEvent(GalleryView.loadedEvent, data);
    };

    galleryView.onScrollCallback = (p1: NSArray<any>) => {
      const data: Array<IFiles> = this.deserialize(p1);
      ref?.get()?.sendEvent(GalleryView.scrollEvent, data);
    };

    galleryView.onItemMaxCallback = (p1: NSArray<any>) => {
      const data: Array<IFiles> = this.deserialize(p1);
    };

    galleryView.onEditCallBack = (p1: NSArray<any>) => {
      const data: Array<IFiles> = this.deserialize(p1);
      alert(this.idioma.getTranslation('msj_construction'));
    };

    galleryView.onPreviewCallBack = (p1: NSArray<any>) => {
      const data: Array<IFiles> = this.deserialize(p1);
      if (data.filter((item) => item.isSelected === true)[0].data.filter((file) => file.isSelected === true).length <= 0) {
        alert(this.idioma.getTranslation('msj_select_item_preview'));
      }
    };

    galleryView.onTapCallback = (p1: NSArray<any>) => {
      const data: Array<IFiles> = this.deserialize(p1);
      ref?.get()?.sendEvent(GalleryView.clickEvent, data);
    };

    (this.nativeView as UIView).addSubview(view);
  }

  private deserialize(data): any {
    if (data instanceof NSNull) {
      return null;
    }

    if (data instanceof NSArray) {
      let array = [];
      for (let i = 0, n = data.count; i < n; i++) {
        array[i] = this.deserialize(data.objectAtIndex(i));
      }
      return array;
    }

    if (data instanceof NSDictionary) {
      let dict = {};
      for (let i = 0, n = data.allKeys.count; i < n; i++) {
        let key = data.allKeys.objectAtIndex(i);
        dict[key] = this.deserialize(data.objectForKey(key));
      }
      return dict;
    }
    return data;
  }
}
