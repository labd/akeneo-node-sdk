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
import type { ProductsEmbeddedItemsInnerAllOfLinks } from './ProductsEmbeddedItemsInnerAllOfLinks';
import {
    ProductsEmbeddedItemsInnerAllOfLinksFromJSON,
    ProductsEmbeddedItemsInnerAllOfLinksFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOfLinksToJSON,
} from './ProductsEmbeddedItemsInnerAllOfLinks';

/**
 * 
 * @export
 * @interface CurrenciesEmbeddedItemsInner
 */
export interface CurrenciesEmbeddedItemsInner {
    /**
     * 
     * @type {ProductsEmbeddedItemsInnerAllOfLinks}
     * @memberof CurrenciesEmbeddedItemsInner
     */
    links?: ProductsEmbeddedItemsInnerAllOfLinks;
    /**
     * Currency code
     * @type {string}
     * @memberof CurrenciesEmbeddedItemsInner
     */
    code: string;
    /**
     * Whether the currency is enabled
     * @type {boolean}
     * @memberof CurrenciesEmbeddedItemsInner
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the CurrenciesEmbeddedItemsInner interface.
 */
export function instanceOfCurrenciesEmbeddedItemsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function CurrenciesEmbeddedItemsInnerFromJSON(json: any): CurrenciesEmbeddedItemsInner {
    return CurrenciesEmbeddedItemsInnerFromJSONTyped(json, false);
}

export function CurrenciesEmbeddedItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrenciesEmbeddedItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductsEmbeddedItemsInnerAllOfLinksFromJSON(json['_links']),
        'code': json['code'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function CurrenciesEmbeddedItemsInnerToJSON(value?: CurrenciesEmbeddedItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductsEmbeddedItemsInnerAllOfLinksToJSON(value.links),
        'code': value.code,
        'enabled': value.enabled,
    };
}

