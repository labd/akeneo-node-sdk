/* tslint:disable */
/* eslint-disable */
/**
 * Akeneo PIM REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GetMediaFilesCode200ResponseLinksDownload } from './GetMediaFilesCode200ResponseLinksDownload';
import {
    GetMediaFilesCode200ResponseLinksDownloadFromJSON,
    GetMediaFilesCode200ResponseLinksDownloadFromJSONTyped,
    GetMediaFilesCode200ResponseLinksDownloadToJSON,
} from './GetMediaFilesCode200ResponseLinksDownload';
import type { MediaFileItemListLinksSelf } from './MediaFileItemListLinksSelf';
import {
    MediaFileItemListLinksSelfFromJSON,
    MediaFileItemListLinksSelfFromJSONTyped,
    MediaFileItemListLinksSelfToJSON,
} from './MediaFileItemListLinksSelf';

/**
 * 
 * @export
 * @interface MediaFileItemListLinks
 */
export interface MediaFileItemListLinks {
    /**
     * 
     * @type {MediaFileItemListLinksSelf}
     * @memberof MediaFileItemListLinks
     */
    self?: MediaFileItemListLinksSelf;
    /**
     * 
     * @type {GetMediaFilesCode200ResponseLinksDownload}
     * @memberof MediaFileItemListLinks
     */
    download?: GetMediaFilesCode200ResponseLinksDownload;
}

/**
 * Check if a given object implements the MediaFileItemListLinks interface.
 */
export function instanceOfMediaFileItemListLinks(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MediaFileItemListLinksFromJSON(json: any): MediaFileItemListLinks {
    return MediaFileItemListLinksFromJSONTyped(json, false);
}

export function MediaFileItemListLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaFileItemListLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': !exists(json, 'self') ? undefined : MediaFileItemListLinksSelfFromJSON(json['self']),
        'download': !exists(json, 'download') ? undefined : GetMediaFilesCode200ResponseLinksDownloadFromJSON(json['download']),
    };
}

export function MediaFileItemListLinksToJSON(value?: MediaFileItemListLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': MediaFileItemListLinksSelfToJSON(value.self),
        'download': GetMediaFilesCode200ResponseLinksDownloadToJSON(value.download),
    };
}
