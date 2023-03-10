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
import type { AssociationTypesEmbeddedItemsInnerAllOfLabels } from './AssociationTypesEmbeddedItemsInnerAllOfLabels';
import {
    AssociationTypesEmbeddedItemsInnerAllOfLabelsFromJSON,
    AssociationTypesEmbeddedItemsInnerAllOfLabelsFromJSONTyped,
    AssociationTypesEmbeddedItemsInnerAllOfLabelsToJSON,
} from './AssociationTypesEmbeddedItemsInnerAllOfLabels';

/**
 * 
 * @export
 * @interface AssociationTypesEmbeddedItemsInnerAllOf
 */
export interface AssociationTypesEmbeddedItemsInnerAllOf {
    /**
     * Association type code
     * @type {string}
     * @memberof AssociationTypesEmbeddedItemsInnerAllOf
     */
    code: string;
    /**
     * 
     * @type {AssociationTypesEmbeddedItemsInnerAllOfLabels}
     * @memberof AssociationTypesEmbeddedItemsInnerAllOf
     */
    labels?: AssociationTypesEmbeddedItemsInnerAllOfLabels;
    /**
     * When true, the association is a quantified association (Only available in the PIM Serenity version.)
     * @type {boolean}
     * @memberof AssociationTypesEmbeddedItemsInnerAllOf
     */
    isQuantified?: boolean;
    /**
     * When true, the association is a two-way association (Only available in the PIM Serenity version.)
     * @type {boolean}
     * @memberof AssociationTypesEmbeddedItemsInnerAllOf
     */
    isTwoWay?: boolean;
}

/**
 * Check if a given object implements the AssociationTypesEmbeddedItemsInnerAllOf interface.
 */
export function instanceOfAssociationTypesEmbeddedItemsInnerAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function AssociationTypesEmbeddedItemsInnerAllOfFromJSON(json: any): AssociationTypesEmbeddedItemsInnerAllOf {
    return AssociationTypesEmbeddedItemsInnerAllOfFromJSONTyped(json, false);
}

export function AssociationTypesEmbeddedItemsInnerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssociationTypesEmbeddedItemsInnerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'labels': !exists(json, 'labels') ? undefined : AssociationTypesEmbeddedItemsInnerAllOfLabelsFromJSON(json['labels']),
        'isQuantified': !exists(json, 'is_quantified') ? undefined : json['is_quantified'],
        'isTwoWay': !exists(json, 'is_two_way') ? undefined : json['is_two_way'],
    };
}

export function AssociationTypesEmbeddedItemsInnerAllOfToJSON(value?: AssociationTypesEmbeddedItemsInnerAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'labels': AssociationTypesEmbeddedItemsInnerAllOfLabelsToJSON(value.labels),
        'is_quantified': value.isQuantified,
        'is_two_way': value.isTwoWay,
    };
}

