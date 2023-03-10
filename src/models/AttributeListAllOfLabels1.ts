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
 * Column labels for each locale
 * @export
 * @interface AttributeListAllOfLabels1
 */
export interface AttributeListAllOfLabels1 {
    /**
     * Column label for the locale `localeCode`
     * @type {string}
     * @memberof AttributeListAllOfLabels1
     */
    localeCode?: string;
}

/**
 * Check if a given object implements the AttributeListAllOfLabels1 interface.
 */
export function instanceOfAttributeListAllOfLabels1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributeListAllOfLabels1FromJSON(json: any): AttributeListAllOfLabels1 {
    return AttributeListAllOfLabels1FromJSONTyped(json, false);
}

export function AttributeListAllOfLabels1FromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeListAllOfLabels1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function AttributeListAllOfLabels1ToJSON(value?: AttributeListAllOfLabels1 | null): any {
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

