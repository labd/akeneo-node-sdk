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
import type { Products1EmbeddedItemsInnerAllOfAssociations } from './Products1EmbeddedItemsInnerAllOfAssociations';
import {
    Products1EmbeddedItemsInnerAllOfAssociationsFromJSON,
    Products1EmbeddedItemsInnerAllOfAssociationsFromJSONTyped,
    Products1EmbeddedItemsInnerAllOfAssociationsToJSON,
} from './Products1EmbeddedItemsInnerAllOfAssociations';
import type { Products1EmbeddedItemsInnerAllOfQuantifiedAssociations } from './Products1EmbeddedItemsInnerAllOfQuantifiedAssociations';
import {
    Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSON,
    Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSONTyped,
    Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsToJSON,
} from './Products1EmbeddedItemsInnerAllOfQuantifiedAssociations';
import type { ProductsEmbeddedItemsInnerAllOf1CompletenessesInner } from './ProductsEmbeddedItemsInnerAllOf1CompletenessesInner';
import {
    ProductsEmbeddedItemsInnerAllOf1CompletenessesInnerFromJSON,
    ProductsEmbeddedItemsInnerAllOf1CompletenessesInnerFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOf1CompletenessesInnerToJSON,
} from './ProductsEmbeddedItemsInnerAllOf1CompletenessesInner';
import type { ProductsEmbeddedItemsInnerAllOf1Metadata } from './ProductsEmbeddedItemsInnerAllOf1Metadata';
import {
    ProductsEmbeddedItemsInnerAllOf1MetadataFromJSON,
    ProductsEmbeddedItemsInnerAllOf1MetadataFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOf1MetadataToJSON,
} from './ProductsEmbeddedItemsInnerAllOf1Metadata';
import type { ProductsEmbeddedItemsInnerAllOf1ValuesValueInner } from './ProductsEmbeddedItemsInnerAllOf1ValuesValueInner';
import {
    ProductsEmbeddedItemsInnerAllOf1ValuesValueInnerFromJSON,
    ProductsEmbeddedItemsInnerAllOf1ValuesValueInnerFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOf1ValuesValueInnerToJSON,
} from './ProductsEmbeddedItemsInnerAllOf1ValuesValueInner';
import type { ProductsEmbeddedItemsInnerAllOfLinks } from './ProductsEmbeddedItemsInnerAllOfLinks';
import {
    ProductsEmbeddedItemsInnerAllOfLinksFromJSON,
    ProductsEmbeddedItemsInnerAllOfLinksFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOfLinksToJSON,
} from './ProductsEmbeddedItemsInnerAllOfLinks';

/**
 * 
 * @export
 * @interface Products1EmbeddedItemsInner
 */
export interface Products1EmbeddedItemsInner {
    /**
     * 
     * @type {ProductsEmbeddedItemsInnerAllOfLinks}
     * @memberof Products1EmbeddedItemsInner
     */
    links?: ProductsEmbeddedItemsInnerAllOfLinks;
    /**
     * Product uuid
     * @type {string}
     * @memberof Products1EmbeddedItemsInner
     */
    uuid?: string;
    /**
     * Whether the product is enabled
     * @type {boolean}
     * @memberof Products1EmbeddedItemsInner
     */
    enabled?: boolean;
    /**
     * <a href='api-reference.html#Family'>Family</a> code from which the product inherits its attributes and attributes requirements.
     * @type {string}
     * @memberof Products1EmbeddedItemsInner
     */
    family?: string;
    /**
     * Codes of the <a href='api-reference.html#Category'>categories</a> in which the product is classified
     * @type {Array<string>}
     * @memberof Products1EmbeddedItemsInner
     */
    categories?: Array<string>;
    /**
     * Codes of the groups to which the product belong
     * @type {Array<string>}
     * @memberof Products1EmbeddedItemsInner
     */
    groups?: Array<string>;
    /**
     * Code of the parent <a href='api-reference.html#Productmodel'>product model</a> when the product is a variant (only available since the 2.0). This parent can be modified since the 2.3.
     * @type {string}
     * @memberof Products1EmbeddedItemsInner
     */
    parent?: string;
    /**
     * Product attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details
     * @type {{ [key: string]: Array<ProductsEmbeddedItemsInnerAllOf1ValuesValueInner>; }}
     * @memberof Products1EmbeddedItemsInner
     */
    values?: { [key: string]: Array<ProductsEmbeddedItemsInnerAllOf1ValuesValueInner>; };
    /**
     * 
     * @type {Products1EmbeddedItemsInnerAllOfAssociations}
     * @memberof Products1EmbeddedItemsInner
     */
    associations?: Products1EmbeddedItemsInnerAllOfAssociations;
    /**
     * 
     * @type {Products1EmbeddedItemsInnerAllOfQuantifiedAssociations}
     * @memberof Products1EmbeddedItemsInner
     */
    quantifiedAssociations?: Products1EmbeddedItemsInnerAllOfQuantifiedAssociations;
    /**
     * Date of creation
     * @type {string}
     * @memberof Products1EmbeddedItemsInner
     */
    created?: string;
    /**
     * Date of the last update
     * @type {string}
     * @memberof Products1EmbeddedItemsInner
     */
    updated?: string;
    /**
     * 
     * @type {ProductsEmbeddedItemsInnerAllOf1Metadata}
     * @memberof Products1EmbeddedItemsInner
     */
    metadata?: ProductsEmbeddedItemsInnerAllOf1Metadata;
    /**
     * Product quality scores for each channel/locale combination (only available since the 5.0 and when the "with_quality_scores" query parameter is set to "true")
     * @type {object}
     * @memberof Products1EmbeddedItemsInner
     */
    qualityScores?: object;
    /**
     * Product completenesses for each channel/locale combination (only available since the 7.0 version, and when the "with_completenesses" query parameter is set to "true")
     * @type {Array<ProductsEmbeddedItemsInnerAllOf1CompletenessesInner>}
     * @memberof Products1EmbeddedItemsInner
     */
    completenesses?: Array<ProductsEmbeddedItemsInnerAllOf1CompletenessesInner>;
}

/**
 * Check if a given object implements the Products1EmbeddedItemsInner interface.
 */
export function instanceOfProducts1EmbeddedItemsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Products1EmbeddedItemsInnerFromJSON(json: any): Products1EmbeddedItemsInner {
    return Products1EmbeddedItemsInnerFromJSONTyped(json, false);
}

export function Products1EmbeddedItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Products1EmbeddedItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductsEmbeddedItemsInnerAllOfLinksFromJSON(json['_links']),
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'family': !exists(json, 'family') ? undefined : json['family'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'values': !exists(json, 'values') ? undefined : json['values'],
        'associations': !exists(json, 'associations') ? undefined : Products1EmbeddedItemsInnerAllOfAssociationsFromJSON(json['associations']),
        'quantifiedAssociations': !exists(json, 'quantified_associations') ? undefined : Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSON(json['quantified_associations']),
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'metadata': !exists(json, 'metadata') ? undefined : ProductsEmbeddedItemsInnerAllOf1MetadataFromJSON(json['metadata']),
        'qualityScores': !exists(json, 'quality_scores') ? undefined : json['quality_scores'],
        'completenesses': !exists(json, 'completenesses') ? undefined : ((json['completenesses'] as Array<any>).map(ProductsEmbeddedItemsInnerAllOf1CompletenessesInnerFromJSON)),
    };
}

export function Products1EmbeddedItemsInnerToJSON(value?: Products1EmbeddedItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductsEmbeddedItemsInnerAllOfLinksToJSON(value.links),
        'uuid': value.uuid,
        'enabled': value.enabled,
        'family': value.family,
        'categories': value.categories,
        'groups': value.groups,
        'parent': value.parent,
        'values': value.values,
        'associations': Products1EmbeddedItemsInnerAllOfAssociationsToJSON(value.associations),
        'quantified_associations': Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsToJSON(value.quantifiedAssociations),
        'created': value.created,
        'updated': value.updated,
        'metadata': ProductsEmbeddedItemsInnerAllOf1MetadataToJSON(value.metadata),
        'quality_scores': value.qualityScores,
        'completenesses': value.completenesses === undefined ? undefined : ((value.completenesses as Array<any>).map(ProductsEmbeddedItemsInnerAllOf1CompletenessesInnerToJSON)),
    };
}
