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
import type { ProductsEmbedded } from './ProductsEmbedded';
import {
    ProductsEmbeddedFromJSON,
    ProductsEmbeddedFromJSONTyped,
    ProductsEmbeddedToJSON,
} from './ProductsEmbedded';
import type { ProductsLinks } from './ProductsLinks';
import {
    ProductsLinksFromJSON,
    ProductsLinksFromJSONTyped,
    ProductsLinksToJSON,
} from './ProductsLinks';

/**
 * 
 * @export
 * @interface Products
 */
export interface Products {
    /**
     * 
     * @type {ProductsEmbedded}
     * @memberof Products
     */
    embedded?: ProductsEmbedded;
    /**
     * 
     * @type {ProductsLinks}
     * @memberof Products
     */
    links?: ProductsLinks;
    /**
     * Current page number
     * @type {number}
     * @memberof Products
     */
    currentPage?: number;
}

/**
 * Check if a given object implements the Products interface.
 */
export function instanceOfProducts(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductsFromJSON(json: any): Products {
    return ProductsFromJSONTyped(json, false);
}

export function ProductsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Products {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : ProductsEmbeddedFromJSON(json['_embedded']),
        'links': !exists(json, '_links') ? undefined : ProductsLinksFromJSON(json['_links']),
        'currentPage': !exists(json, 'current_page') ? undefined : json['current_page'],
    };
}

export function ProductsToJSON(value?: Products | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': ProductsEmbeddedToJSON(value.embedded),
        '_links': ProductsLinksToJSON(value.links),
        'current_page': value.currentPage,
    };
}

