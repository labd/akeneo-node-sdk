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
import type { Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner } from './Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner';
import {
    Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInnerFromJSON,
    Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInnerFromJSONTyped,
    Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInnerToJSON,
} from './Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner';
import type { ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner } from './ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner';
import {
    ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInnerFromJSON,
    ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInnerFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInnerToJSON,
} from './ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner';

/**
 * 
 * @export
 * @interface Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode
 */
export interface Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode {
    /**
     * Array of objects containing product uuids and quantities with which the product is in relation
     * @type {Array<Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner>}
     * @memberof Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode
     */
    products?: Array<Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInner>;
    /**
     * Array of objects containing product model codes and quantities with which the product is in relation
     * @type {Array<ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner>}
     * @memberof Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode
     */
    productModels?: Array<ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInner>;
}

/**
 * Check if a given object implements the Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode interface.
 */
export function instanceOfProducts1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSON(json: any): Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode {
    return Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSONTyped(json, false);
}

export function Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'products': !exists(json, 'products') ? undefined : ((json['products'] as Array<any>).map(Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInnerFromJSON)),
        'productModels': !exists(json, 'product_models') ? undefined : ((json['product_models'] as Array<any>).map(ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInnerFromJSON)),
    };
}

export function Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeToJSON(value?: Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'products': value.products === undefined ? undefined : ((value.products as Array<any>).map(Products1EmbeddedItemsInnerAllOfQuantifiedAssociationsQuantifiedAssociationTypeCodeProductsInnerToJSON)),
        'product_models': value.productModels === undefined ? undefined : ((value.productModels as Array<any>).map(ProductsEmbeddedItemsInnerAllOf1QuantifiedAssociationsQuantifiedAssociationTypeCodeProductModelsInnerToJSON)),
    };
}

