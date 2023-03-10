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
 * Category labels for each locale
 * @export
 * @interface CategoryListAllOfLabels
 */
export interface CategoryListAllOfLabels {
    /**
     * Category label for the locale `localeCode`
     * @type {string}
     * @memberof CategoryListAllOfLabels
     */
    localeCode?: string;
}

/**
 * Check if a given object implements the CategoryListAllOfLabels interface.
 */
export function instanceOfCategoryListAllOfLabels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CategoryListAllOfLabelsFromJSON(json: any): CategoryListAllOfLabels {
    return CategoryListAllOfLabelsFromJSONTyped(json, false);
}

export function CategoryListAllOfLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryListAllOfLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function CategoryListAllOfLabelsToJSON(value?: CategoryListAllOfLabels | null): any {
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

