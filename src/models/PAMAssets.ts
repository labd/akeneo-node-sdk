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
import type { PAMAssetsEmbedded } from './PAMAssetsEmbedded';
import {
    PAMAssetsEmbeddedFromJSON,
    PAMAssetsEmbeddedFromJSONTyped,
    PAMAssetsEmbeddedToJSON,
} from './PAMAssetsEmbedded';
import type { ProductsLinks } from './ProductsLinks';
import {
    ProductsLinksFromJSON,
    ProductsLinksFromJSONTyped,
    ProductsLinksToJSON,
} from './ProductsLinks';

/**
 * 
 * @export
 * @interface PAMAssets
 */
export interface PAMAssets {
    /**
     * 
     * @type {PAMAssetsEmbedded}
     * @memberof PAMAssets
     */
    embedded?: PAMAssetsEmbedded;
    /**
     * 
     * @type {ProductsLinks}
     * @memberof PAMAssets
     */
    links?: ProductsLinks;
    /**
     * Current page number
     * @type {number}
     * @memberof PAMAssets
     */
    currentPage?: number;
}

/**
 * Check if a given object implements the PAMAssets interface.
 */
export function instanceOfPAMAssets(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PAMAssetsFromJSON(json: any): PAMAssets {
    return PAMAssetsFromJSONTyped(json, false);
}

export function PAMAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PAMAssets {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : PAMAssetsEmbeddedFromJSON(json['_embedded']),
        'links': !exists(json, '_links') ? undefined : ProductsLinksFromJSON(json['_links']),
        'currentPage': !exists(json, 'current_page') ? undefined : json['current_page'],
    };
}

export function PAMAssetsToJSON(value?: PAMAssets | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': PAMAssetsEmbeddedToJSON(value.embedded),
        '_links': ProductsLinksToJSON(value.links),
        'current_page': value.currentPage,
    };
}

