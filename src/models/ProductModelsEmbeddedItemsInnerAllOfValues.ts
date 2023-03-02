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
import type { ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInner } from './ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInner';
import {
    ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInnerFromJSON,
    ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInnerFromJSONTyped,
    ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInnerToJSON,
} from './ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInner';

/**
 * Product model attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details
 * @export
 * @interface ProductModelsEmbeddedItemsInnerAllOfValues
 */
export interface ProductModelsEmbeddedItemsInnerAllOfValues {
    /**
     * 
     * @type {Array<ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInner>}
     * @memberof ProductModelsEmbeddedItemsInnerAllOfValues
     */
    additionalProperties?: Array<ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInner>;
}

/**
 * Check if a given object implements the ProductModelsEmbeddedItemsInnerAllOfValues interface.
 */
export function instanceOfProductModelsEmbeddedItemsInnerAllOfValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsEmbeddedItemsInnerAllOfValuesFromJSON(json: any): ProductModelsEmbeddedItemsInnerAllOfValues {
    return ProductModelsEmbeddedItemsInnerAllOfValuesFromJSONTyped(json, false);
}

export function ProductModelsEmbeddedItemsInnerAllOfValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelsEmbeddedItemsInnerAllOfValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additionalProperties': !exists(json, 'additionalProperties') ? undefined : ((json['additionalProperties'] as Array<any>).map(ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInnerFromJSON)),
    };
}

export function ProductModelsEmbeddedItemsInnerAllOfValuesToJSON(value?: ProductModelsEmbeddedItemsInnerAllOfValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additionalProperties': value.additionalProperties === undefined ? undefined : ((value.additionalProperties as Array<any>).map(ProductModelsEmbeddedItemsInnerAllOfValuesAdditionalPropertiesInnerToJSON)),
    };
}
