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
import type { PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLink } from './PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLink';
import {
    PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkFromJSON,
    PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkFromJSONTyped,
    PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkToJSON,
} from './PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLink';

/**
 * 
 * @export
 * @interface PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner
 */
export interface PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner {
    /**
     * 
     * @type {PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLink}
     * @memberof PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner
     */
    link?: PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLink;
    /**
     * Locale code of the reference file
     * @type {string}
     * @memberof PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner
     */
    locale?: string;
    /**
     * Code of the reference file
     * @type {string}
     * @memberof PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner
     */
    code?: string;
}

/**
 * Check if a given object implements the PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner interface.
 */
export function instanceOfPAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerFromJSON(json: any): PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner {
    return PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerFromJSONTyped(json, false);
}

export function PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, '_link') ? undefined : PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkFromJSON(json['_link']),
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerToJSON(value?: PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_link': PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerLinkToJSON(value.link),
        'locale': value.locale,
        'code': value.code,
    };
}

