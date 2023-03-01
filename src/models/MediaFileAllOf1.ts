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
 * @interface MediaFileAllOf1
 */
export interface MediaFileAllOf1 {
    /**
     * Media file code
     * @type {string}
     * @memberof MediaFileAllOf1
     */
    code?: string;
    /**
     * Original filename of the media file
     * @type {string}
     * @memberof MediaFileAllOf1
     */
    originalFilename?: string;
    /**
     * Mime type of the media file
     * @type {string}
     * @memberof MediaFileAllOf1
     */
    mimeType?: string;
    /**
     * Size of the media file
     * @type {number}
     * @memberof MediaFileAllOf1
     */
    size?: number;
    /**
     * Extension of the media file
     * @type {string}
     * @memberof MediaFileAllOf1
     */
    extension?: string;
}

/**
 * Check if a given object implements the MediaFileAllOf1 interface.
 */
export function instanceOfMediaFileAllOf1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MediaFileAllOf1FromJSON(json: any): MediaFileAllOf1 {
    return MediaFileAllOf1FromJSONTyped(json, false);
}

export function MediaFileAllOf1FromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaFileAllOf1 {
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

export function MediaFileAllOf1ToJSON(value?: MediaFileAllOf1 | null): any {
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
