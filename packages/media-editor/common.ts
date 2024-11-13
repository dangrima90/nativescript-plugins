import { Color, GridLayout, Label, Screen, ScrollEventData, ScrollView, StackLayout, Utils, View } from '@nativescript/core';

export class MediaEditorCommon extends View {
    @GetSetProperty()
    files: Array<string>=[];
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