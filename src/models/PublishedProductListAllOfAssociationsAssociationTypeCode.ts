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
 * @interface PublishedProductListAllOfAssociationsAssociationTypeCode
 */
export interface PublishedProductListAllOfAssociationsAssociationTypeCode {
    /**
     * Array of groups codes with which the published product is in relation
     * @type {Array<string>}
     * @memberof PublishedProductListAllOfAssociationsAssociationTypeCode
     */
    groups?: Array<string>;
    /**
     * Array of published product identifiers with which the published product is in relation
     * @type {Array<string>}
     * @memberof PublishedProductListAllOfAssociationsAssociationTypeCode
     */
    products?: Array<string>;
    /**
     * Array of product model codes with which the product is in relation (only available since the v2.1)
     * @type {Array<string>}
     * @memberof PublishedProductListAllOfAssociationsAssociationTypeCode
     */
    productModels?: Array<string>;
}

/**
 * Check if a given object implements the PublishedProductListAllOfAssociationsAssociationTypeCode interface.
 */
export function instanceOfPublishedProductListAllOfAssociationsAssociationTypeCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublishedProductListAllOfAssociationsAssociationTypeCodeFromJSON(json: any): PublishedProductListAllOfAssociationsAssociationTypeCode {
    return PublishedProductListAllOfAssociationsAssociationTypeCodeFromJSONTyped(json, false);
}

export function PublishedProductListAllOfAssociationsAssociationTypeCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedProductListAllOfAssociationsAssociationTypeCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'products': !exists(json, 'products') ? undefined : json['products'],
        'productModels': !exists(json, 'product_models') ? undefined : json['product_models'],
    };
}

export function PublishedProductListAllOfAssociationsAssociationTypeCodeToJSON(value?: PublishedProductListAllOfAssociationsAssociationTypeCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groups': value.groups,
        'products': value.products,
        'product_models': value.productModels,
    };
}

