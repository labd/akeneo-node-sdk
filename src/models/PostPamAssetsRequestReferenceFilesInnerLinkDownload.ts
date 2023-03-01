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
 * @interface PostPamAssetsRequestReferenceFilesInnerLinkDownload
 */
export interface PostPamAssetsRequestReferenceFilesInnerLinkDownload {
    /**
     * URI to download the reference file
     * @type {string}
     * @memberof PostPamAssetsRequestReferenceFilesInnerLinkDownload
     */
    href?: string;
}

/**
 * Check if a given object implements the PostPamAssetsRequestReferenceFilesInnerLinkDownload interface.
 */
export function instanceOfPostPamAssetsRequestReferenceFilesInnerLinkDownload(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostPamAssetsRequestReferenceFilesInnerLinkDownloadFromJSON(json: any): PostPamAssetsRequestReferenceFilesInnerLinkDownload {
    return PostPamAssetsRequestReferenceFilesInnerLinkDownloadFromJSONTyped(json, false);
}

export function PostPamAssetsRequestReferenceFilesInnerLinkDownloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostPamAssetsRequestReferenceFilesInnerLinkDownload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
    };
}

export function PostPamAssetsRequestReferenceFilesInnerLinkDownloadToJSON(value?: PostPamAssetsRequestReferenceFilesInnerLinkDownload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
    };
}
