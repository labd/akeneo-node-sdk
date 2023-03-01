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
 * PAM asset category labels for each locale
 * @export
 * @interface PostAssetCategoriesRequestLabels
 */
export interface PostAssetCategoriesRequestLabels {
    /**
     * PAM asset category label for the locale `localeCode`
     * @type {string}
     * @memberof PostAssetCategoriesRequestLabels
     */
    localeCode?: string;
}

/**
 * Check if a given object implements the PostAssetCategoriesRequestLabels interface.
 */
export function instanceOfPostAssetCategoriesRequestLabels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostAssetCategoriesRequestLabelsFromJSON(json: any): PostAssetCategoriesRequestLabels {
    return PostAssetCategoriesRequestLabelsFromJSONTyped(json, false);
}

export function PostAssetCategoriesRequestLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostAssetCategoriesRequestLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function PostAssetCategoriesRequestLabelsToJSON(value?: PostAssetCategoriesRequestLabels | null): any {
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
