import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedScreenOrientation } from '@demo/shared';
import { getOrientacion, Orientacion, setOrientacion } from '@wuilmerj24/screen-orientation';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export function getOrientationF() {
  console.log('test screen-orientation!', getOrientacion());
  // console.log("change orientation ",Application.orientation());
}
export function setOrientationF() {
  setOrientacion(Orientacion.LANDSCAPE)
    .then((res) => {
      console.log('res ', res);
    })
    .catch((err) => {
      console.log('err ', err);
    });
}

export class DemoModel extends DemoSharedScreenOrientation {}
