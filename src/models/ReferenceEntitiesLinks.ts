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
import type { ProductsLinksFirst } from './ProductsLinksFirst';
import {
    ProductsLinksFirstFromJSON,
    ProductsLinksFirstFromJSONTyped,
    ProductsLinksFirstToJSON,
} from './ProductsLinksFirst';
import type { ProductsLinksNext } from './ProductsLinksNext';
import {
    ProductsLinksNextFromJSON,
    ProductsLinksNextFromJSONTyped,
    ProductsLinksNextToJSON,
} from './ProductsLinksNext';
import type { ProductsLinksSelf } from './ProductsLinksSelf';
import {
    ProductsLinksSelfFromJSON,
    ProductsLinksSelfFromJSONTyped,
    ProductsLinksSelfToJSON,
} from './ProductsLinksSelf';

/**
 * 
 * @export
 * @interface ReferenceEntitiesLinks
 */
export interface ReferenceEntitiesLinks {
    /**
     * 
     * @type {ProductsLinksSelf}
     * @memberof ReferenceEntitiesLinks
     */
    self?: ProductsLinksSelf;
    /**
     * 
     * @type {ProductsLinksFirst}
     * @memberof ReferenceEntitiesLinks
     */
    first?: ProductsLinksFirst;
    /**
     * 
     * @type {ProductsLinksNext}
     * @memberof ReferenceEntitiesLinks
     */
    next?: ProductsLinksNext;
}

/**
 * Check if a given object implements the ReferenceEntitiesLinks interface.
 */
export function instanceOfReferenceEntitiesLinks(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReferenceEntitiesLinksFromJSON(json: any): ReferenceEntitiesLinks {
    return ReferenceEntitiesLinksFromJSONTyped(json, false);
}

export function ReferenceEntitiesLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceEntitiesLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': !exists(json, 'self') ? undefined : ProductsLinksSelfFromJSON(json['self']),
        'first': !exists(json, 'first') ? undefined : ProductsLinksFirstFromJSON(json['first']),
        'next': !exists(json, 'next') ? undefined : ProductsLinksNextFromJSON(json['next']),
    };
}

export function ReferenceEntitiesLinksToJSON(value?: ReferenceEntitiesLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': ProductsLinksSelfToJSON(value.self),
        'first': ProductsLinksFirstToJSON(value.first),
        'next': ProductsLinksNextToJSON(value.next),
    };
}

