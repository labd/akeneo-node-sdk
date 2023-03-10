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
import type { ProductModelsEmbeddedItemsInnerAllOfAssociations } from './ProductModelsEmbeddedItemsInnerAllOfAssociations';
import {
    ProductModelsEmbeddedItemsInnerAllOfAssociationsFromJSON,
    ProductModelsEmbeddedItemsInnerAllOfAssociationsFromJSONTyped,
    ProductModelsEmbeddedItemsInnerAllOfAssociationsToJSON,
} from './ProductModelsEmbeddedItemsInnerAllOfAssociations';
import type { ProductModelsEmbeddedItemsInnerAllOfMetadata } from './ProductModelsEmbeddedItemsInnerAllOfMetadata';
import {
    ProductModelsEmbeddedItemsInnerAllOfMetadataFromJSON,
    ProductModelsEmbeddedItemsInnerAllOfMetadataFromJSONTyped,
    ProductModelsEmbeddedItemsInnerAllOfMetadataToJSON,
} from './ProductModelsEmbeddedItemsInnerAllOfMetadata';
import type { ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations } from './ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations';
import {
    ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSON,
    ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSONTyped,
    ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsToJSON,
} from './ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations';
import type { ProductModelsEmbeddedItemsInnerAllOfValuesValueInner } from './ProductModelsEmbeddedItemsInnerAllOfValuesValueInner';
import {
    ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerFromJSON,
    ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerFromJSONTyped,
    ProductModelsEmbeddedItemsInnerAllOfValuesValueInnerToJSON,
} from './ProductModelsEmbeddedItemsInnerAllOfValuesValueInner';

/**
 * 
 * @export
 * @interface PatchProductModelsRequest
 */
export interface PatchProductModelsRequest {
    /**
     * Product model code
     * @type {string}
     * @memberof PatchProductModelsRequest
     */
    code: string;
    /**
     * <a href='api-reference.html#Family'>Family</a> code  from which the product inherits its attributes and attributes requirements (since the 3.2)
     * @type {string}
     * @memberof PatchProductModelsRequest
     */
    family?: string;
    /**
     * Family variant code from which the product model inherits its attributes and variant attributes
     * @type {string}
     * @memberof PatchProductModelsRequest
     */
    familyVariant: string;
    /**
     * Code of the parent <a href='api-reference.html#Productmodel'>product model</a>. This parent can be modified since the 2.3.
     * @type {string}
     * @memberof PatchProductModelsRequest
     */
    parent?: string;
    /**
     * Codes of the <a href='api-reference.html#Category'>categories</a> in which the product model is categorized
     * @type {Array<string>}
     * @memberof PatchProductModelsRequest
     */
    categories?: Array<string>;
    /**
     * Product model attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details
     * @type {{ [key: string]: Array<ProductModelsEmbeddedItemsInnerAllOfValuesValueInner>; }}
     * @memberof PatchProductModelsRequest
     */
    values?: { [key: string]: Array<ProductModelsEmbeddedItemsInnerAllOfValuesValueInner>; };
    /**
     * 
     * @type {ProductModelsEmbeddedItemsInnerAllOfAssociations}
     * @memberof PatchProductModelsRequest
     */
    associations?: ProductModelsEmbeddedItemsInnerAllOfAssociations;
    /**
     * 
     * @type {ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations}
     * @memberof PatchProductModelsRequest
     */
    quantifiedAssociations?: ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociations;
    /**
     * Date of creation
     * @type {string}
     * @memberof PatchProductModelsRequest
     */
    created?: string;
    /**
     * Date of the last update
     * @type {string}
     * @memberof PatchProductModelsRequest
     */
    updated?: string;
    /**
     * 
     * @type {ProductModelsEmbeddedItemsInnerAllOfMetadata}
     * @memberof PatchProductModelsRequest
     */
    metadata?: ProductModelsEmbeddedItemsInnerAllOfMetadata;
    /**
     * Product model quality scores for each channel/locale combination (<strong>only available since the 7.0 version</strong> and when the "with_quality_scores" query parameter is set to "true")
     * @type {object}
     * @memberof PatchProductModelsRequest
     */
    qualityScores?: object;
}

/**
 * Check if a given object implements the PatchProductModelsRequest interface.
 */
export function instanceOfPatchProductModelsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "familyVariant" in value;

    return isInstance;
}

export function PatchProductModelsRequestFromJSON(json: any): PatchProductModelsRequest {
    return PatchProductModelsRequestFromJSONTyped(json, false);
}

export function PatchProductModelsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchProductModelsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'family': !exists(json, 'family') ? undefined : json['family'],
        'familyVariant': json['family_variant'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'values': !exists(json, 'values') ? undefined : json['values'],
        'associations': !exists(json, 'associations') ? undefined : ProductModelsEmbeddedItemsInnerAllOfAssociationsFromJSON(json['associations']),
        'quantifiedAssociations': !exists(json, 'quantified_associations') ? undefined : ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsFromJSON(json['quantified_associations']),
        'created': !exists(json, 'created') ? undefined : json['created'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'metadata': !exists(json, 'metadata') ? undefined : ProductModelsEmbeddedItemsInnerAllOfMetadataFromJSON(json['metadata']),
        'qualityScores': !exists(json, 'quality_scores') ? undefined : json['quality_scores'],
    };
}

export function PatchProductModelsRequestToJSON(value?: PatchProductModelsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'family': value.family,
        'family_variant': value.familyVariant,
        'parent': value.parent,
        'categories': value.categories,
        'values': value.values,
        'associations': ProductModelsEmbeddedItemsInnerAllOfAssociationsToJSON(value.associations),
        'quantified_associations': ProductModelsEmbeddedItemsInnerAllOfQuantifiedAssociationsToJSON(value.quantifiedAssociations),
        'created': value.created,
        'updated': value.updated,
        'metadata': ProductModelsEmbeddedItemsInnerAllOfMetadataToJSON(value.metadata),
        'quality_scores': value.qualityScores,
    };
}

