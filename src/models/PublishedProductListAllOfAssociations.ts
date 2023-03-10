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
import type { PublishedProductListAllOfAssociationsAssociationTypeCode } from './PublishedProductListAllOfAssociationsAssociationTypeCode';
import {
    PublishedProductListAllOfAssociationsAssociationTypeCodeFromJSON,
    PublishedProductListAllOfAssociationsAssociationTypeCodeFromJSONTyped,
    PublishedProductListAllOfAssociationsAssociationTypeCodeToJSON,
} from './PublishedProductListAllOfAssociationsAssociationTypeCode';

/**
 * Several associations related to groups and/or other published products, grouped by association types
 * @export
 * @interface PublishedProductListAllOfAssociations
 */
export interface PublishedProductListAllOfAssociations {
    /**
     * 
     * @type {PublishedProductListAllOfAssociationsAssociationTypeCode}
     * @memberof PublishedProductListAllOfAssociations
     */
    associationTypeCode?: PublishedProductListAllOfAssociationsAssociationTypeCode;
}

/**
 * Check if a given object implements the PublishedProductListAllOfAssociations interface.
 */
export function instanceOfPublishedProductListAllOfAssociations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublishedProductListAllOfAssociationsFromJSON(json: any): PublishedProductListAllOfAssociations {
    return PublishedProductListAllOfAssociationsFromJSONTyped(json, false);
}

export function PublishedProductListAllOfAssociationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedProductListAllOfAssociations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'associationTypeCode': !exists(json, 'associationTypeCode') ? undefined : PublishedProductListAllOfAssociationsAssociationTypeCodeFromJSON(json['associationTypeCode']),
    };
}

export function PublishedProductListAllOfAssociationsToJSON(value?: PublishedProductListAllOfAssociations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'associationTypeCode': PublishedProductListAllOfAssociationsAssociationTypeCodeToJSON(value.associationTypeCode),
    };
}

