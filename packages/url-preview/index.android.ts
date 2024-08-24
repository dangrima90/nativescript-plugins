import { Color, CoreTypes, Frame, GridLayout, Screen } from '@nativescript/core';
import { Contenedor, GetSetProperty, TypeView, UrlPreviewCommon } from './common';

export class UrlPreview extends UrlPreviewCommon {
    @GetSetProperty()
    public url: string;
    @GetSetProperty()
    bgColor: string;
    @GetSetProperty()
    titleTextColor: string;
    @GetSetProperty()
    descriptionTextColor: string;
    @GetSetProperty()
    view: TypeView;
    @GetSetProperty()
    borderRadiusImage: number;
    @GetSetProperty()
    loadingColor: string;
    @GetSetProperty()
    borderRadius: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;

    createNativeView(): Object {
        const contenedor:GridLayout=new Contenedor(
            this.url,
            this.bgColor,
            this.titleTextColor,
            this.descriptionTextColor,
            this.view,
            this.borderRadiusImage,
            this.loadingColor
        );
        contenedor.borderRadius=this.borderRadius;
        Frame.topmost()._addView(contenedor);
        this.nativeView=contenedor.android;
        return this.nativeView;
    }

}
