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
 * @interface ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels
 */
export interface ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels {
    /**
     * 
     * @type {string}
     * @memberof ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels
     */
    code?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels
     */
    quantity?: number;
}

/**
 * Check if a given object implements the ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels interface.
 */
export function instanceOfProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsFromJSON(json: any): ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels {
    return ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsFromJSONTyped(json, false);
}

export function ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsToJSON(value?: ProductListAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'quantity': value.quantity,
    };
}
