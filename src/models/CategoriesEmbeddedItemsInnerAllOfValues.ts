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
import type { CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInner } from './CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInner';
import {
    CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInnerFromJSON,
    CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInnerFromJSONTyped,
    CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInnerToJSON,
} from './CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInner';

/**
 * Attribute values
 * @export
 * @interface CategoriesEmbeddedItemsInnerAllOfValues
 */
export interface CategoriesEmbeddedItemsInnerAllOfValues {
    /**
     * 
     * @type {Array<CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInner>}
     * @memberof CategoriesEmbeddedItemsInnerAllOfValues
     */
    additionalPropertiesAttributeUuidChannelCodeLocaleCode?: Array<CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInner>;
}

/**
 * Check if a given object implements the CategoriesEmbeddedItemsInnerAllOfValues interface.
 */
export function instanceOfCategoriesEmbeddedItemsInnerAllOfValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CategoriesEmbeddedItemsInnerAllOfValuesFromJSON(json: any): CategoriesEmbeddedItemsInnerAllOfValues {
    return CategoriesEmbeddedItemsInnerAllOfValuesFromJSONTyped(json, false);
}

export function CategoriesEmbeddedItemsInnerAllOfValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoriesEmbeddedItemsInnerAllOfValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalPropertiesAttributeUuidChannelCodeLocaleCode': !exists(json, 'additionalProperties|attributeUuid|channelCode|localeCode') ? undefined : ((json['additionalProperties|attributeUuid|channelCode|localeCode'] as Array<any>).map(CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInnerFromJSON)),
    };
}

export function CategoriesEmbeddedItemsInnerAllOfValuesToJSON(value?: CategoriesEmbeddedItemsInnerAllOfValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalProperties|attributeUuid|channelCode|localeCode': value.additionalPropertiesAttributeUuidChannelCodeLocaleCode === undefined ? undefined : ((value.additionalPropertiesAttributeUuidChannelCodeLocaleCode as Array<any>).map(CategoriesEmbeddedItemsInnerAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeInnerToJSON)),
    };
}
