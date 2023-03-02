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
 * Asset family labels for each locale
 * @export
 * @interface AssetFamiliesEmbeddedItemsInnerAllOfLabels
 */
export interface AssetFamiliesEmbeddedItemsInnerAllOfLabels {
    /**
     * Asset family label for the locale `localeCode`
     * @type {string}
     * @memberof AssetFamiliesEmbeddedItemsInnerAllOfLabels
     */
    localeCode?: string;
}

/**
 * Check if a given object implements the AssetFamiliesEmbeddedItemsInnerAllOfLabels interface.
 */
export function instanceOfAssetFamiliesEmbeddedItemsInnerAllOfLabels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssetFamiliesEmbeddedItemsInnerAllOfLabelsFromJSON(json: any): AssetFamiliesEmbeddedItemsInnerAllOfLabels {
    return AssetFamiliesEmbeddedItemsInnerAllOfLabelsFromJSONTyped(json, false);
}

export function AssetFamiliesEmbeddedItemsInnerAllOfLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFamiliesEmbeddedItemsInnerAllOfLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function AssetFamiliesEmbeddedItemsInnerAllOfLabelsToJSON(value?: AssetFamiliesEmbeddedItemsInnerAllOfLabels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localeCode': value.localeCode,
    };
}
