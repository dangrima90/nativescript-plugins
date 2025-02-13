import { CoreTypes } from '@nativescript/core';
import { UrlPreviewCommon } from './common';

export declare class UrlPreview extends UrlPreviewCommon {
    /**
     * URL de la página web de la cual se obtendrá la información.
     *
     * @type {string}
     */
    url: string;

    /**
     * Color de fondo para el contenedor.
     *
     * @type {string}
     */
    bgColor: string;

    /**
     * Color del texto utilizado para el título.
     *
     * @type {string}
     */
    titleTextColor: string;

    /**
     * Color del texto utilizado para la descripción.
     *
     * @type {string}
     */
    descriptionTextColor: string;

    /**
     * Tipo de vista que se utilizará para mostrar la información.
     *
     * @type {TypeView}
     */
    view: TypeView;

    /**
     * Radio de borde aplicado a la imagen dentro del contenedor.
     *
     * @type {number}
     */
    borderRadiusImage: number;

    /**
     * Color del indicador de carga que se muestra mientras se obtiene la información.
     *
     * @type {string}
     */
    loadingColor: string;

    /**
     * Radio de borde aplicado al contenedor.
     *
     * @type {string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit}
     */
    borderRadius: string | number | CoreTypes.LengthDipUnit | CoreTypes.LengthPxUnit;

}
