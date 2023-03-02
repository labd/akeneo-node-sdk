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
/**
 * 
 * @export
 * @interface MediaFilesEmbeddedItemsInnerAllOf1
 */
export interface MediaFilesEmbeddedItemsInnerAllOf1 {
    /**
     * Media file code
     * @type {string}
     * @memberof MediaFilesEmbeddedItemsInnerAllOf1
     */
    code?: string;
    /**
     * Original filename of the media file
     * @type {string}
     * @memberof MediaFilesEmbeddedItemsInnerAllOf1
     */
    originalFilename?: string;
    /**
     * Mime type of the media file
     * @type {string}
     * @memberof MediaFilesEmbeddedItemsInnerAllOf1
     */
    mimeType?: string;
    /**
     * Size of the media file
     * @type {number}
     * @memberof MediaFilesEmbeddedItemsInnerAllOf1
     */
    size?: number;
    /**
     * Extension of the media file
     * @type {string}
     * @memberof MediaFilesEmbeddedItemsInnerAllOf1
     */
    extension?: string;
}

/**
 * Check if a given object implements the MediaFilesEmbeddedItemsInnerAllOf1 interface.
 */
export function instanceOfMediaFilesEmbeddedItemsInnerAllOf1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MediaFilesEmbeddedItemsInnerAllOf1FromJSON(json: any): MediaFilesEmbeddedItemsInnerAllOf1 {
    return MediaFilesEmbeddedItemsInnerAllOf1FromJSONTyped(json, false);
}

export function MediaFilesEmbeddedItemsInnerAllOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaFilesEmbeddedItemsInnerAllOf1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'originalFilename': !exists(json, 'original_filename') ? undefined : json['original_filename'],
        'mimeType': !exists(json, 'mime_type') ? undefined : json['mime_type'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'extension': !exists(json, 'extension') ? undefined : json['extension'],
    };
}

export function MediaFilesEmbeddedItemsInnerAllOf1ToJSON(value?: MediaFilesEmbeddedItemsInnerAllOf1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'original_filename': value.originalFilename,
        'mime_type': value.mimeType,
        'size': value.size,
        'extension': value.extension,
    };
}
