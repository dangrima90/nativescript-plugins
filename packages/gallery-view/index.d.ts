import { ContentView } from '@nativescript/core';
import { EGalleryViewEvents } from './enums/events';

export * from './enums/events';
export * from './interfaces/events.interface';

export declare class GalleryView extends ContentView {
	/**
	 * Evento que se dispara cuando ocurre un error en la galería.
	 *
	 * @type {EGalleryViewEvents.ErrorEvent}
	 */
	public static errorEvent: EGalleryViewEvents.ErrorEvent;

	/**
	 * Evento que se dispara cuando se hace scroll.
	 *
	 * @type {EGalleryViewEvents.OnScrolledEvent}
	 */
	public static scrollEvent: EGalleryViewEvents.OnScrolledEvent;

	/**
	 * Evento que se dispara cuando se selecciona un item.
	 *
	 * @type {EGalleryViewEvents.OnClickedEvent}
	 */
	public static clickEvent: EGalleryViewEvents.OnClickedEvent;

	/**
	 * Evento que se dispara cuando se excede el maximo de items establecidos.
	 *
	 * @type {EGalleryViewEvents.maxItemSelectEvent}
	 */
	public static onMaxItemSelectEvent: EGalleryViewEvents.OnMaxItemSelectEvent;

	language: ELanguage;
	file_type: EFileType;
	showHeader: boolean;
	bgColorHeader: string;
	textcolorHeader: string;
	maxItemSelect: number;
	showFooter: boolean;
	bgColorFooter: string;
	textColorFooter: string;
	edit: boolean;
	preview: boolean;
	colorRadio: string;
	albunInit: string;
}
