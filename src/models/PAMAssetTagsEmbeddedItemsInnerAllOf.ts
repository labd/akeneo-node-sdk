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
 * @interface PAMAssetTagsEmbeddedItemsInnerAllOf
 */
export interface PAMAssetTagsEmbeddedItemsInnerAllOf {
    /**
     * PAM asset tag code
     * @type {string}
     * @memberof PAMAssetTagsEmbeddedItemsInnerAllOf
     */
    code: string;
}

/**
 * Check if a given object implements the PAMAssetTagsEmbeddedItemsInnerAllOf interface.
 */
export function instanceOfPAMAssetTagsEmbeddedItemsInnerAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function PAMAssetTagsEmbeddedItemsInnerAllOfFromJSON(json: any): PAMAssetTagsEmbeddedItemsInnerAllOf {
    return PAMAssetTagsEmbeddedItemsInnerAllOfFromJSONTyped(json, false);
}

export function PAMAssetTagsEmbeddedItemsInnerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PAMAssetTagsEmbeddedItemsInnerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
    };
}

export function PAMAssetTagsEmbeddedItemsInnerAllOfToJSON(value?: PAMAssetTagsEmbeddedItemsInnerAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
    };
}

