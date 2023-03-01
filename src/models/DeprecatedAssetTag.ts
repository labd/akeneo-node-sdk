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
 * @interface DeprecatedAssetTag
 */
export interface DeprecatedAssetTag {
    /**
     * PAM asset tag code
     * @type {string}
     * @memberof DeprecatedAssetTag
     */
    code: string;
}

/**
 * Check if a given object implements the DeprecatedAssetTag interface.
 */
export function instanceOfDeprecatedAssetTag(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function DeprecatedAssetTagFromJSON(json: any): DeprecatedAssetTag {
    return DeprecatedAssetTagFromJSONTyped(json, false);
}

export function DeprecatedAssetTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeprecatedAssetTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
    };
}

export function DeprecatedAssetTagToJSON(value?: DeprecatedAssetTag | null): any {
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
