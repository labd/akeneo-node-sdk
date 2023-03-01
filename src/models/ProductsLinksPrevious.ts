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
 * @interface ProductsLinksPrevious
 */
export interface ProductsLinksPrevious {
    /**
     * URI of the previous page of resources
     * @type {string}
     * @memberof ProductsLinksPrevious
     */
    href?: string;
}

/**
 * Check if a given object implements the ProductsLinksPrevious interface.
 */
export function instanceOfProductsLinksPrevious(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductsLinksPreviousFromJSON(json: any): ProductsLinksPrevious {
    return ProductsLinksPreviousFromJSONTyped(json, false);
}

export function ProductsLinksPreviousFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductsLinksPrevious {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
    };
}

export function ProductsLinksPreviousToJSON(value?: ProductsLinksPrevious | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
    };
}
