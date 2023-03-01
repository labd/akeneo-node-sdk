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
import type { ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCode } from './ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCode';
import {
    ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON,
    ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSONTyped,
    ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON,
} from './ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCode';

/**
 * Several quantified associations related to products and/or product models, grouped by quantified association types (only available since the 5.0)
 * @export
 * @interface ProductListAllOf1QuantifiedAssociations
 */
export interface ProductListAllOf1QuantifiedAssociations {
    /**
     * 
     * @type {ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCode}
     * @memberof ProductListAllOf1QuantifiedAssociations
     */
    quantifiedAssociationTypeCode?: ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCode;
}

/**
 * Check if a given object implements the ProductListAllOf1QuantifiedAssociations interface.
 */
export function instanceOfProductListAllOf1QuantifiedAssociations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductListAllOf1QuantifiedAssociationsFromJSON(json: any): ProductListAllOf1QuantifiedAssociations {
    return ProductListAllOf1QuantifiedAssociationsFromJSONTyped(json, false);
}

export function ProductListAllOf1QuantifiedAssociationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductListAllOf1QuantifiedAssociations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quantifiedAssociationTypeCode': !exists(json, 'quantifiedAssociationTypeCode') ? undefined : ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON(json['quantifiedAssociationTypeCode']),
    };
}

export function ProductListAllOf1QuantifiedAssociationsToJSON(value?: ProductListAllOf1QuantifiedAssociations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quantifiedAssociationTypeCode': ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON(value.quantifiedAssociationTypeCode),
    };
}
