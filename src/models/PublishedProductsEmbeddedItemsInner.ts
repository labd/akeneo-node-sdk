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
import type { ProductModelsEmbeddedItemsInnerAllOfValuesValueInner } from './ProductModelsEmbeddedItemsInnerAllOfValuesValueInner';
import {
    ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerFromJSON,
    ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerFromJSONTyped,
    ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerToJSON,
} from './ProductModelsEmbeddedItemsInnerAllOfValuesValueInner';
import type { ProductsEmbeddedItemsInnerAllOfLinks } from './ProductsEmbeddedItemsInnerAllOfLinks';
import {
    ProductsEmbeddedItemsInnerAllOfLinksFromJSON,
    ProductsEmbeddedItemsInnerAllOfLinksFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOfLinksToJSON,
} from './ProductsEmbeddedItemsInnerAllOfLinks';
import type { PublishedProductsEmbeddedItemsInnerAllOfAssociations } from './PublishedProductsEmbeddedItemsInnerAllOfAssociations';
import {
    PublishedProductsEmbeddedItemsInnerAllOfAssociationsFromJSON,
    PublishedProductsEmbeddedItemsInnerAllOfAssociationsFromJSONTyped,
    PublishedProductsEmbeddedItemsInnerAllOfAssociationsToJSON,
} from './PublishedProductsEmbeddedItemsInnerAllOfAssociations';

/**
 * 
 * @export
 * @interface PublishedProductsEmbeddedItemsInner
 */
export interface PublishedProductsEmbeddedItemsInner {
    /**
     * 
     * @type {ProductsEmbeddedItemsInnerAllOfLinks}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    links?: ProductsEmbeddedItemsInnerAllOfLinks;
    /**
     * Published product identifier, i.e. the value of the only `pim_catalog_identifier` attribute
     * @type {string}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    identifier: string;
    /**
     * Whether the published product is enable
     * @type {boolean}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    enabled?: boolean;
    /**
     * <a href='api-reference.html#Family'>Family</a> code from which the published product inherits its attributes and attributes requirements
     * @type {string}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    family?: string;
    /**
     * Codes of the <a href='api-reference.html#Category'>categories</a> in which the published product is classified
     * @type {Array<string>}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    categories?: Array<string>;
    /**
     * Codes of the groups to which the published product belong
     * @type {Array<string>}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    groups?: Array<string>;
    /**
     * Published product attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details
     * @type {{ [key: string]: Array<ProductModelsEmbeddedItemsInnerAllOfValuesValueInner>; }}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    values?: { [key: string]: Array<ProductModelsEmbeddedItemsInnerAllOfValuesValueInner>; };
    /**
     * 
     * @type {PublishedProductsEmbeddedItemsInnerAllOfAssociations}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    associations?: PublishedProductsEmbeddedItemsInnerAllOfAssociations;
    /**
     * Warning: associations with quantities are not compatible with the published products. The response will always be empty.
     * @type {object}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    quantifiedAssociations?: object;
    /**
     * Date of creation
     * @type {string}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    created?: string;
    /**
     * Date of the last update
     * @type {string}
     * @memberof PublishedProductsEmbeddedItemsInner
     */
    updated?: string;
}

/**
 * Check if a given object implements the PublishedProductsEmbeddedItemsInner interface.
 */
export function instanceOfPublishedProductsEmbeddedItemsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "identifier" in value;

    return isInstance;
}

export function PublishedProductsEmbeddedItemsInnerFromJSON(json: any): PublishedProductsEmbeddedItemsInner {
    return PublishedProductsEmbeddedItemsInnerFromJSONTyped(json, false);
}

export function PublishedProductsEmbeddedItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedProductsEmbeddedItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductsEmbeddedItemsInnerAllOfLinksFromJSON(json['_links']),
        'identifier': json['identifier'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'family': !exists(json, 'family') ? undefined : json['family'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'values': !exists(json, 'values') ? undefined : json['values'],
        'associations': !exists(json, 'associations') ? undefined : PublishedProductsEmbeddedItemsInnerAllOfAssociationsFromJSON(json['associations']),
        'quantifiedAssociations': !exists(json, 'quantified_associations') ? undefined : json['quantified_associations'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
    };
}

export function PublishedProductsEmbeddedItemsInnerToJSON(value?: PublishedProductsEmbeddedItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductsEmbeddedItemsInnerAllOfLinksToJSON(value.links),
        'identifier': value.identifier,
        'enabled': value.enabled,
        'family': value.family,
        'categories': value.categories,
        'groups': value.groups,
        'values': value.values,
        'associations': PublishedProductsEmbeddedItemsInnerAllOfAssociationsToJSON(value.associations),
        'quantified_associations': value.quantifiedAssociations,
        'created': value.created,
        'updated': value.updated,
    };
}

