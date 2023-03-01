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
 * @interface PostReferenceEntityMediaFilesRequest
 */
export interface PostReferenceEntityMediaFilesRequest {
    /**
     * The binary of the media file
     * @type {Blob}
     * @memberof PostReferenceEntityMediaFilesRequest
     */
    file: Blob;
}

/**
 * Check if a given object implements the PostReferenceEntityMediaFilesRequest interface.
 */
export function instanceOfPostReferenceEntityMediaFilesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "file" in value;

    return isInstance;
}

export function PostReferenceEntityMediaFilesRequestFromJSON(json: any): PostReferenceEntityMediaFilesRequest {
    return PostReferenceEntityMediaFilesRequestFromJSONTyped(json, false);
}

export function PostReferenceEntityMediaFilesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostReferenceEntityMediaFilesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file': json['file'],
    };
}

export function PostReferenceEntityMediaFilesRequestToJSON(value?: PostReferenceEntityMediaFilesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file': value.file,
    };
}
