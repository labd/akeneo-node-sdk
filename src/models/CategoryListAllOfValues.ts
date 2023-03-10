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
import type { CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCode } from './CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCode';
import {
    CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeFromJSON,
    CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeFromJSONTyped,
    CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeToJSON,
} from './CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCode';

/**
 * Attribute values
 * @export
 * @interface CategoryListAllOfValues
 */
export interface CategoryListAllOfValues {
    /**
     * 
     * @type {Array<CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCode>}
     * @memberof CategoryListAllOfValues
     */
    additionalPropertiesAttributeUuidChannelCodeLocaleCode?: Array<CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCode>;
}

/**
 * Check if a given object implements the CategoryListAllOfValues interface.
 */
export function instanceOfCategoryListAllOfValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CategoryListAllOfValuesFromJSON(json: any): CategoryListAllOfValues {
    return CategoryListAllOfValuesFromJSONTyped(json, false);
}

export function CategoryListAllOfValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryListAllOfValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalPropertiesAttributeUuidChannelCodeLocaleCode': !exists(json, 'additionalProperties|attributeUuid|channelCode|localeCode') ? undefined : ((json['additionalProperties|attributeUuid|channelCode|localeCode'] as Array<any>).map(CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeFromJSON)),
    };
}

export function CategoryListAllOfValuesToJSON(value?: CategoryListAllOfValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalProperties|attributeUuid|channelCode|localeCode': value.additionalPropertiesAttributeUuidChannelCodeLocaleCode === undefined ? undefined : ((value.additionalPropertiesAttributeUuidChannelCodeLocaleCode as Array<any>).map(CategoryListAllOfValuesAdditionalPropertiesAttributeUuidChannelCodeLocaleCodeToJSON)),
    };
}

