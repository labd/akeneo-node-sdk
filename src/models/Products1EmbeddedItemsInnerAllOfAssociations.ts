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
import type { Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCode } from './Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCode';
import {
    Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeFromJSON,
    Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeFromJSONTyped,
    Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeToJSON,
} from './Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCode';

/**
 * Several associations related to groups, product models and/or other products, grouped by association types
 * @export
 * @interface Products1EmbeddedItemsInnerAllOfAssociations
 */
export interface Products1EmbeddedItemsInnerAllOfAssociations {
    /**
     * 
     * @type {Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCode}
     * @memberof Products1EmbeddedItemsInnerAllOfAssociations
     */
    associationTypeCode?: Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCode;
}

/**
 * Check if a given object implements the Products1EmbeddedItemsInnerAllOfAssociations interface.
 */
export function instanceOfProducts1EmbeddedItemsInnerAllOfAssociations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Products1EmbeddedItemsInnerAllOfAssociationsFromJSON(json: any): Products1EmbeddedItemsInnerAllOfAssociations {
    return Products1EmbeddedItemsInnerAllOfAssociationsFromJSONTyped(json, false);
}

export function Products1EmbeddedItemsInnerAllOfAssociationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Products1EmbeddedItemsInnerAllOfAssociations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'associationTypeCode': !exists(json, 'associationTypeCode') ? undefined : Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeFromJSON(json['associationTypeCode']),
    };
}

export function Products1EmbeddedItemsInnerAllOfAssociationsToJSON(value?: Products1EmbeddedItemsInnerAllOfAssociations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'associationTypeCode': Products1EmbeddedItemsInnerAllOfAssociationsAssociationTypeCodeToJSON(value.associationTypeCode),
    };
}

