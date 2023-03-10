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
 * @interface ProductModelsEmbeddedItemsInnerAllOfValuesValueInner
 */
export interface ProductModelsEmbeddedItemsInnerAllOfValuesValueInner {
    /**
     * <a href='api-reference.html#Channel'>Channel</a> code of the product value
     * @type {string}
     * @memberof ProductModelsEmbeddedItemsInnerAllOfValuesValueInner
     */
    scope?: string;
    /**
     * <a href='api-reference.html#Locale'>Locale</a> code of the product value
     * @type {string}
     * @memberof ProductModelsEmbeddedItemsInnerAllOfValuesValueInner
     */
    locale?: string;
    /**
     * <a href='api-reference.html#Productuuid'>Product</a> value
     * @type {object}
     * @memberof ProductModelsEmbeddedItemsInnerAllOfValuesValueInner
     */
    data?: object;
}

/**
 * Check if a given object implements the ProductModelsEmbeddedItemsInnerAllOfValuesValueInner interface.
 */
export function instanceOfProductModelsEmbeddedItemsInnerAllOfValuesValueInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerFromJSON(json: any): ProductModelsEmbeddedItemsInnerAllOfValuesValueInner {
    return ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerFromJSONTyped(json, false);
}

export function ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelsEmbeddedItemsInnerAllOfValuesValueInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerToJSON(value?: ProductModelsEmbeddedItemsInnerAllOfValuesValueInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'scope': value.scope,
        'locale': value.locale,
        'data': value.data,
    };
}

