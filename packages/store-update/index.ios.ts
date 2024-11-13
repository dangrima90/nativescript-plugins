import { ActivityIndicator, Application, Button, Color, getCurrentPage, GridLayout, Http, confirm, Label, ModalTransition, Screen, ShowModalOptions, StackLayout, TapGestureEventData, Utils } from '@nativescript/core';

export function getVersionCode(): number {
  try {
    let infoDictionary = NSBundle.mainBundle.infoDictionary;
    let versionCode = infoDictionary.objectForKey('CFBundleVersion');
    return versionCode;
  } catch (error) {
    console.error(error);
  }
}

export function getVersionName(): string {
  try {
    let infoDictionary = NSBundle.mainBundle.infoDictionary;
    let versionName = infoDictionary.objectForKey('CFBundleShortVersionString');
    return versionName;
  } catch (error) {
    console.error(error);
  }
}

export function getVersionNube(): Promise<any> {
  return new Promise(async (rs, rj) => {
    const url: string = `https://itunes.apple.com/lookup?bundleId=${NSBundle.mainBundle.bundleIdentifier}&country=${NSLocale.currentLocale.countryCode}&${new Date().getTime()}`;
      await Http.request({
        url: url,
        method: 'GET',
      })
        .then((response) => {
          const statusCode = response.statusCode;
          if (statusCode === 200) {
            let version = '';
            const data = response.content.toJSON();
            version = data.results[0].version;
            const appStoreID = data.results[0].trackId;
            rs({ version: version, appStoreID: appStoreID });
          }
          rj(null);
        })
        .catch((err) => {
          rj(err);
        })
        .finally(() => {
          rj(null);
        });
  });
}

/**
 * Checks for an app update and optionally forces the user to update.
 * @param {boolean} forceUpdate - If true, forces the user to update the app.
 * @param {string} [okTextButton] - Text for the OK button in the update prompt. Optional.
 * @param {string} [cancelTextButton] - Text for the Cancel button in the update prompt. Optional.
 * @param {string} [message] - Message to display in the update prompt. Optional.
 * @param {boolean} [openAppStore] - If true, opens the app store directly. Optional.
 * @returns {Promise<any>} A promise that resolves when the update check is complete.
 * @example
 * // Check for an update and force the user to update if one is available
 * checkUpdate(true).then(result => {
 *     console.log('Update check complete:', result);
 * }).catch(error => {
 *     console.error('Error during update check:', error);
 * });
 */
export function checkUpdate(forceUpdate: boolean, okTextButton?: string, cancelTextButton?: string, message?: string, openAppStore?: boolean): Promise<any> {
  return new Promise(async (rs, rj) => {
    const version_nube: string = await getVersionNube()
      .then((data) => {
        // modalLoading.closeModal();
        return data;
      })
      .catch((err) => {
        // modalLoading.closeModal();
      });
    const version_local: string = getVersionName();
    const comparison = compareVersions(version_nube['version'], version_local);
    if (comparison > 0) {
      if (forceUpdate) {
        const modal: ModalUpdateIos = new ModalUpdateIos(message, okTextButton, version_nube['appStoreID'], openAppStore);
        Application.ios.on(Application.iOSApplication.resumeEvent, async (args) => {
          const version_nube: string = await getVersionNube();
          const version_local: string = getVersionName();
          const comparison = compareVersions(version_nube, version_local);
          if (comparison <= 0) {
            modal.closeModal();
            Application.ios.off(Application.iOSApplication.resumeEvent);
            Application.ios.off(Application.iOSApplication.backgroundEvent);
          }
          console.log('activityResumed');
        });

        Application.ios.on(Application.iOSApplication.backgroundEvent, (args) => {
          console.log('activityPaused');
        });

        getCurrentPage().showModal(modal, {
          closeCallback(...args) { },
          context: null,
          animated: true,
          cancelable: false,
          fullscreen: true,
          stretched: true,
          transition: ModalTransition.AndroidTransitionType.enter,
        } as ShowModalOptions);
      } else {
        confirm({
          cancelable: true,
          cancelButtonText: cancelTextButton,
          message: message,
          neutralButtonText: ' ',
          okButtonText: okTextButton,
        }).then((res) => {
          if (res) {
            // openiOSStore(NSBundle.mainBundle.bundleIdentifier);
            openiOSStore(version_nube['appStoreID']);
          }
        });
      }
    }
  });
}

function compareVersions(version1: string, version2: string): number {
  const v1Parts = version1.split('.').map(Number);
  const v2Parts = version2.split('.').map(Number);

  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1 = v1Parts[i] || 0;
    const v2 = v2Parts[i] || 0;

    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    }
  }

  return 0;
}

function openiOSStore(id: string) {
  const url: string = `itms-apps://itunes.apple.com/app/id${id}?l=${NSLocale.currentLocale.countryCode}`;
  Utils.openUrl(url);
}

export function checkUpdateNative(): Promise<any> {
  return new Promise<any>((rs, rj) => {
    console.log('checkUpdateNative: only for Android');
    rj(false);
  });
}

class ModalLoading extends StackLayout {
  constructor() {
    super();
    const loading: ActivityIndicator = new ActivityIndicator();
    loading.busy = true;
    loading.color = new Color('#FFFFFF');
    (loading.verticalAlignment = 'middle'), (loading.horizontalAlignment = 'center');
    loading.width = (Screen.mainScreen.widthDIPs * 15) / 100;
    loading.height = (Screen.mainScreen.heightDIPs * 15) / 100;
    this.backgroundColor = new Color('#000000');
    this.width = (Screen.mainScreen.widthDIPs * 15) / 100;
    this.height = (Screen.mainScreen.heightDIPs * 10) / 100;
    this.borderRadius = 10;
    this.addChild(loading);
  }
}

class ModalUpdateIos extends GridLayout {
  private btnActualizar: Button;
  constructor(private message: string, private okBtnText: string, private idPackage: string, private openAppStore?: boolean) {
    super();
    this.backgroundColor = new Color('black');
    this.color = new Color('#FFFFFF');
    const msj: Label = new Label();
    msj.text = message;
    msj.verticalAlignment = 'middle';
    msj.horizontalAlignment = 'center';
    msj.color = new Color('#FFFFFF');
    msj.fontSize = 18;
    msj.style.fontWeight = 'bold';
    this.addChild(msj);

    if (this.openAppStore) {
      this.btnActualizar = new Button();
      this.btnActualizar.text = okBtnText;
      this.btnActualizar.color = new Color('#FFFFFF');
      this.btnActualizar.horizontalAlignment = 'center';
      this.btnActualizar.verticalAlignment = 'bottom';
      this.btnActualizar.width = (Screen.mainScreen.widthDIPs * 90) / 100;
      this.btnActualizar.height = 'auto';
      this.btnActualizar.background = '#CCCCCC';
      this.btnActualizar.marginBottom = 30;
      this.btnActualizar.on('tap', (args: TapGestureEventData) => {
        openiOSStore(this.idPackage);
      });
      this.addChild(this.btnActualizar);
    }

    Application.ios.on(Application.iOSApplication.suspendEvent, (args) => { });
  }

  disposeNativeView(): void {
    Application.ios.off(Application.iOSApplication.suspendEvent);
    super.disposeNativeView();
  }
}