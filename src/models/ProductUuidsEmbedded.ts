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
 * @interface ProductUuidsEmbedded
 */
export interface ProductUuidsEmbedded {
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductUuidsEmbedded
     */
    items?: Array<string>;
}

/**
 * Check if a given object implements the ProductUuidsEmbedded interface.
 */
export function instanceOfProductUuidsEmbedded(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductUuidsEmbeddedFromJSON(json: any): ProductUuidsEmbedded {
    return ProductUuidsEmbeddedFromJSONTyped(json, false);
}

export function ProductUuidsEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductUuidsEmbedded {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : json['items'],
    };
}

export function ProductUuidsEmbeddedToJSON(value?: ProductUuidsEmbedded | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items,
    };
}

