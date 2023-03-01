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
 * Family labels for each locale
 * @export
 * @interface FamilyListAllOfLabels
 */
export interface FamilyListAllOfLabels {
    /**
     * Family label for the locale `localeCode`
     * @type {string}
     * @memberof FamilyListAllOfLabels
     */
    localeCode?: string;
}

/**
 * Check if a given object implements the FamilyListAllOfLabels interface.
 */
export function instanceOfFamilyListAllOfLabels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FamilyListAllOfLabelsFromJSON(json: any): FamilyListAllOfLabels {
    return FamilyListAllOfLabelsFromJSONTyped(json, false);
}

export function FamilyListAllOfLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FamilyListAllOfLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function FamilyListAllOfLabelsToJSON(value?: FamilyListAllOfLabels | null): any {
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
