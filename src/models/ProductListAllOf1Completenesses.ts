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
 * @interface ProductListAllOf1Completenesses
 */
export interface ProductListAllOf1Completenesses {
    /**
     * 
     * @type {string}
     * @memberof ProductListAllOf1Completenesses
     */
    scope?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductListAllOf1Completenesses
     */
    locale?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductListAllOf1Completenesses
     */
    data?: number;
}

/**
 * Check if a given object implements the ProductListAllOf1Completenesses interface.
 */
export function instanceOfProductListAllOf1Completenesses(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductListAllOf1CompletenessesFromJSON(json: any): ProductListAllOf1Completenesses {
    return ProductListAllOf1CompletenessesFromJSONTyped(json, false);
}

export function ProductListAllOf1CompletenessesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductListAllOf1Completenesses {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function ProductListAllOf1CompletenessesToJSON(value?: ProductListAllOf1Completenesses | null): any {
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
