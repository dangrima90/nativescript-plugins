import { Application, Utils, Http, HttpResponse, GridLayout, Screen, getCurrentPage, ShowModalOptions, Label, AlertOptions, confirm, Color, EventData, ModalTransition, Page, ActivityIndicator, StackLayout, Button, TapGestureEventData, Observable, ApplicationEventData } from '@nativescript/core';
import { setBoolean } from '@nativescript/core/application-settings';

export function getVersionCode(): number {
  try {
    const context: android.content.Context = Application.android.foregroundActivity || Application.android.context || Utils.android.getApplicationContext();
    const versionCode: number = context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionCode;
    return versionCode;
  } catch (error) {
    console.error(error);
  }
}

export function getVersionName(): string {
  try {
    const context: android.content.Context = Application.android.foregroundActivity || Application.android.context || Utils.android.getApplicationContext();
    const versionName: string = context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionName;
    return versionName;
  } catch (error) {
    console.error(error);
  }
}

export function getVersionNube(): Promise<any> {
  return new Promise(async (rs, rj) => {
    const context: android.content.Context = Application.android.foregroundActivity || Application.android.context || Utils.android.getApplicationContext();
    let manager: android.telephony.TelephonyManager = context.getSystemService(android.content.Context.TELEPHONY_SERVICE);
    let locale: string = manager.getNetworkCountryIso();
    const url: string = `https://play.google.com/store/apps/details?id=${context.getPackageName()}&hl=es&gl=${locale}`;
    await Http.getString(url)
      .then((response: string) => {
        const notFoundMessage = 'No se ha podido encontrar la URL solicitada en este servidor.';
        if (response.includes(notFoundMessage)) {
          // throw new Error(notFoundMessage);
          console.log('AppId not found.');
          rj(null);
          return null;
        }
        try {
          const version: string = response.match(/\[\[\["([\d-.]+?)"\]\]/)[1].trim();
          rs(version);
          return version;
        } catch (error) {
          rj(error);
          return error;
        }
      })
      .catch((error) => {
        rj(error);
        return error;
      })
      .finally(() => {
        rj(null);
        return null;
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
  const modalLoading: ModalLoading = new ModalLoading();
  getCurrentPage().showModal(modalLoading, {
    closeCallback(...args) {},
    context: null,
    animated: true,
    cancelable: false,
    fullscreen: false,
    stretched: false,
    transition: ModalTransition.AndroidTransitionType.enter,
  } as ShowModalOptions);
  return new Promise(async (rs, rj) => {
    const version_nube: string = await getVersionNube()
      .then((version) => {
        modalLoading.closeModal();
        return version;
      })
      .catch((err) => {
        modalLoading.closeModal();
      });

    const version_local: string = getVersionName();
    const comparison = compareVersions(version_nube, version_local);
    if (comparison > 0) {
      const context: android.content.Context = Application.android.foregroundActivity || Application.android.context || Utils.android.getApplicationContext();
      if (forceUpdate) {
        const modal: ModalUpdateAndroid = new ModalUpdateAndroid(message, okTextButton, context.getPackageName(), openAppStore);
        Application.android.on('activityResumed', async (args) => {
          const version_nube: string = await getVersionNube();
          const version_local: string = getVersionName();
          const comparison = compareVersions(version_nube, version_local);
          if (comparison <= 0) {
            modal.closeModal();
            Application.android.off('activityResumed');
            Application.android.off('activityPaused');
          }
        });

        Application.android.on('activityPaused', (args) => {});

        getCurrentPage().showModal(modal, {
          closeCallback(...args) {},
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
            openGooglePlay(context.getPackageName());
          }
        });
      }
    }
    modalLoading.closeModal();
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

function openGooglePlay(id: string) {
  const intent: android.content.Intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
  intent.setData(android.net.Uri.parse(`market://details?id=${id}`));
  const context: android.content.Context = Application.android.foregroundActivity || Application.android.context || Utils.android.getApplicationContext();
  context.startActivity(intent);
}

export function checkUpdateNative(): Promise<any> {
  return new Promise<any>((rs, rj) => {
    const appUpdateManager: com.google.android.play.core.appupdate.AppUpdateManager = com.google.android.play.core.appupdate.AppUpdateManagerFactory.create(Utils.android.getApplicationContext());
    const appUpdateInfoTask: com.google.android.gms.tasks.Task<any> = appUpdateManager.getAppUpdateInfo();
    const activity = Application.android.startActivity || Application.android.foregroundActivity;
    Application.on(Application.android.activityPausedEvent, (args: ApplicationEventData) => {
      Application.off(Application.android.activityPausedEvent);
    });
    Application.on(Application.android.activityResumedEvent, (args: ApplicationEventData) => {
      Application.off(Application.android.activityResumedEvent);
      appUpdateInfoTask.addOnSuccessListener(
        new com.google.android.gms.tasks.OnSuccessListener<any>({
          onSuccess(appUpdateInfo) {
            if (appUpdateInfo.updateAvailability() == com.google.android.play.core.install.model.UpdateAvailability.UPDATE_AVAILABLE && appUpdateInfo.isUpdateTypeAllowed(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE)) {
              appUpdateManager.startUpdateFlow(appUpdateInfo, activity, com.google.android.play.core.appupdate.AppUpdateOptions.defaultOptions(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE));
              rs(true);
            }
            {
              rj(false);
            }
          },
        })
      );
    });
    appUpdateInfoTask.addOnSuccessListener(
      new com.google.android.gms.tasks.OnSuccessListener<any>({
        onSuccess(appUpdateInfo) {
          if (appUpdateInfo.updateAvailability() == com.google.android.play.core.install.model.UpdateAvailability.UPDATE_AVAILABLE && appUpdateInfo.isUpdateTypeAllowed(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE)) {
            appUpdateManager.startUpdateFlow(appUpdateInfo, activity, com.google.android.play.core.appupdate.AppUpdateOptions.defaultOptions(com.google.android.play.core.install.model.AppUpdateType.IMMEDIATE));
            rs(true);
          }
          {
            rj(false);
          }
        },
      })
    );
    appUpdateInfoTask.addOnCanceledListener(
      activity,
      new com.google.android.gms.tasks.OnCanceledListener({
        onCanceled() {
          rj(false);
        },
      })
    );
    appUpdateInfoTask.addOnFailureListener(
      new com.google.android.gms.tasks.OnFailureListener({
        onFailure(param0) {
          console.log(param0.getMessage());
          rj(false);
        },
      })
    );
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
    this.width = (Screen.mainScreen.widthDIPs * 90) / 100;
    this.height = (Screen.mainScreen.heightDIPs * 20) / 100;
    this.addChild(loading);
  }
}

class ModalUpdateAndroid extends GridLayout {
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
        openGooglePlay(this.idPackage);
      });
      this.addChild(this.btnActualizar);
    }

    Application.android.on(Application.AndroidApplication.activityBackPressedEvent, (args) => {
      args.cancel = true;
    });
  }

  disposeNativeView(): void {
    Application.android.off(Application.AndroidApplication.activityBackPressedEvent);
    super.disposeNativeView();
  }
}
