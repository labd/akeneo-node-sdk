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
import type { ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCode } from './ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCode';
import {
    ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCodeFromJSON,
    ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCodeFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCodeToJSON,
} from './ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCode';

/**
 * Several associations related to groups, product and/or other product models, grouped by association types
 * @export
 * @interface ProductModelsEmbeddedItemsInnerAllOfAssociations
 */
export interface ProductModelsEmbeddedItemsInnerAllOfAssociations {
    /**
     * 
     * @type {ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCode}
     * @memberof ProductModelsEmbeddedItemsInnerAllOfAssociations
     */
    associationTypeCode?: ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCode;
}

/**
 * Check if a given object implements the ProductModelsEmbeddedItemsInnerAllOfAssociations interface.
 */
export function instanceOfProductModelsEmbeddedItemsInnerAllOfAssociations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsEmbeddedItemsInnerAllOfAssociationsFromJSON(json: any): ProductModelsEmbeddedItemsInnerAllOfAssociations {
    return ProductModelsEmbeddedItemsInnerAllOfAssociationsFromJSONTyped(json, false);
}

export function ProductModelsEmbeddedItemsInnerAllOfAssociationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelsEmbeddedItemsInnerAllOfAssociations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'associationTypeCode': !exists(json, 'associationTypeCode') ? undefined : ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCodeFromJSON(json['associationTypeCode']),
    };
}

export function ProductModelsEmbeddedItemsInnerAllOfAssociationsToJSON(value?: ProductModelsEmbeddedItemsInnerAllOfAssociations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'associationTypeCode': ProductsEmbeddedItemsInnerAllOf1AssociationsAssociationTypeCodeToJSON(value.associationTypeCode),
    };
}

