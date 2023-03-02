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
 * @interface AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabels
 */
export interface AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabels {
    /**
     * Column label for the locale `localeCode`
     * @type {string}
     * @memberof AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabels
     */
    localeCode?: string;
}

/**
 * Check if a given object implements the AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabels interface.
 */
export function instanceOfAttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabelsFromJSON(json: any): AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabels {
    return AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabelsFromJSONTyped(json, false);
}

export function AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabelsToJSON(value?: AttributesEmbeddedItemsInnerAllOfTableConfigurationInnerLabels | null): any {
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
