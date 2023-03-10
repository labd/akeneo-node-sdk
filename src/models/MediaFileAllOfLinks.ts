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
import type { MediaFileAllOfLinksDownload } from './MediaFileAllOfLinksDownload';
import {
    MediaFileAllOfLinksDownloadFromJSON,
    MediaFileAllOfLinksDownloadFromJSONTyped,
    MediaFileAllOfLinksDownloadToJSON,
} from './MediaFileAllOfLinksDownload';

/**
 * 
 * @export
 * @interface MediaFileAllOfLinks
 */
export interface MediaFileAllOfLinks {
    /**
     * 
     * @type {MediaFileAllOfLinksDownload}
     * @memberof MediaFileAllOfLinks
     */
    download?: MediaFileAllOfLinksDownload;
}

/**
 * Check if a given object implements the MediaFileAllOfLinks interface.
 */
export function instanceOfMediaFileAllOfLinks(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MediaFileAllOfLinksFromJSON(json: any): MediaFileAllOfLinks {
    return MediaFileAllOfLinksFromJSONTyped(json, false);
}

export function MediaFileAllOfLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaFileAllOfLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'download': !exists(json, 'download') ? undefined : MediaFileAllOfLinksDownloadFromJSON(json['download']),
    };
}

export function MediaFileAllOfLinksToJSON(value?: MediaFileAllOfLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'download': MediaFileAllOfLinksDownloadToJSON(value.download),
    };
}

