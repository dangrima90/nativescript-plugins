export function getVersionCode(): number;
export function getVersionName(): string;
export function getVersionNube(): Promise<any>;
/**
 * Checks for an app update and optionally forces the user to update.
 * @param {boolean} forceUpdate - If true, forces the user to update the app.
 * @param {string} [okTextButton] - Text for the OK button in the update prompt. Optional.
 * @param {string} [cancelTextButton] - Text for the Cancel button in the update prompt. Optional.
 * @param {string} [message] - Message to display in the update prompt. Optional.
 * @param {boolean} [openAppStore] - If true, opens the app store directly. Optional.
 * @param {boolean} native - use app-update sdk only for android.
 * @returns {Promise<any>} A promise that resolves when the update check is complete.
 * @example
 * // Check for an update and force the user to update if one is available
 * checkUpdate(true).then(result => {
 *     console.log('Update check complete:', result);
 * }).catch(error => {
 *     console.error('Error during update check:', error);
 * });
 */
export function checkUpdate(forceUpdate: boolean, okTextButton?: string, cancelTextButton?: string, message?: string, openAppStore?: boolean, native?: boolean): Promise<any>;
export function checkUpdateNative(): Promise<any>;
