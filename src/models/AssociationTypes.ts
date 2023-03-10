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
import type { AssociationTypesEmbedded } from './AssociationTypesEmbedded';
import {
    AssociationTypesEmbeddedFromJSON,
    AssociationTypesEmbeddedFromJSONTyped,
    AssociationTypesEmbeddedToJSON,
} from './AssociationTypesEmbedded';
import type { ProductsLinks } from './ProductsLinks';
import {
    ProductsLinksFromJSON,
    ProductsLinksFromJSONTyped,
    ProductsLinksToJSON,
} from './ProductsLinks';

/**
 * 
 * @export
 * @interface AssociationTypes
 */
export interface AssociationTypes {
    /**
     * 
     * @type {AssociationTypesEmbedded}
     * @memberof AssociationTypes
     */
    embedded?: AssociationTypesEmbedded;
    /**
     * 
     * @type {ProductsLinks}
     * @memberof AssociationTypes
     */
    links?: ProductsLinks;
    /**
     * Current page number
     * @type {number}
     * @memberof AssociationTypes
     */
    currentPage?: number;
}

/**
 * Check if a given object implements the AssociationTypes interface.
 */
export function instanceOfAssociationTypes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssociationTypesFromJSON(json: any): AssociationTypes {
    return AssociationTypesFromJSONTyped(json, false);
}

export function AssociationTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssociationTypes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : AssociationTypesEmbeddedFromJSON(json['_embedded']),
        'links': !exists(json, '_links') ? undefined : ProductsLinksFromJSON(json['_links']),
        'currentPage': !exists(json, 'current_page') ? undefined : json['current_page'],
    };
}

export function AssociationTypesToJSON(value?: AssociationTypes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': AssociationTypesEmbeddedToJSON(value.embedded),
        '_links': ProductsLinksToJSON(value.links),
        'current_page': value.currentPage,
    };
}

