import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedStoreUpdate } from '@demo/shared';
import { getVersionCode, getVersionName, getVersionNube, checkUpdate, checkUpdateNative } from '@wuilmerj24/store-update';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}
export function getVersions() {
  const versionCode: number = getVersionCode();
  console.log('versionCode ', versionCode);
  const versionName: string = getVersionName();
  console.log('versionName ', versionName);
}

export function getVersionsNube() {
  getVersionNube()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function checkVersion() {
  checkUpdate(true, 'Actualizar', 'No', 'Existe una nueva actualizacion', true)
    .then((res) => {
      console.log('main check ', res);
    })
    .catch((err) => {
      console.log('main  check err ', err);
    });
}

export function checkUpdateNativeFN() {
  checkUpdateNative()
    .then((res) => {
      console.log('main check ', res);
    })
    .catch((err) => {
      console.log('main  check err ', err);
    });
}

export class DemoModel extends DemoSharedStoreUpdate {}
