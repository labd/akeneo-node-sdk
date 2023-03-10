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
 * @interface PostReferenceFilesLocaleCodeRequest
 */
export interface PostReferenceFilesLocaleCodeRequest {
    /**
     * The binaries of the file
     * @type {Blob}
     * @memberof PostReferenceFilesLocaleCodeRequest
     */
    file: Blob;
}

/**
 * Check if a given object implements the PostReferenceFilesLocaleCodeRequest interface.
 */
export function instanceOfPostReferenceFilesLocaleCodeRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "file" in value;

    return isInstance;
}

export function PostReferenceFilesLocaleCodeRequestFromJSON(json: any): PostReferenceFilesLocaleCodeRequest {
    return PostReferenceFilesLocaleCodeRequestFromJSONTyped(json, false);
}

export function PostReferenceFilesLocaleCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostReferenceFilesLocaleCodeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file': json['file'],
    };
}

export function PostReferenceFilesLocaleCodeRequestToJSON(value?: PostReferenceFilesLocaleCodeRequest | null): any {
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

