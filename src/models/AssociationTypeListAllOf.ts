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
import type { AssociationTypeListAllOfLabels } from './AssociationTypeListAllOfLabels';
import {
    AssociationTypeListAllOfLabelsFromJSON,
    AssociationTypeListAllOfLabelsFromJSONTyped,
    AssociationTypeListAllOfLabelsToJSON,
} from './AssociationTypeListAllOfLabels';

/**
 * 
 * @export
 * @interface AssociationTypeListAllOf
 */
export interface AssociationTypeListAllOf {
    /**
     * Association type code
     * @type {string}
     * @memberof AssociationTypeListAllOf
     */
    code: string;
    /**
     * 
     * @type {AssociationTypeListAllOfLabels}
     * @memberof AssociationTypeListAllOf
     */
    labels?: AssociationTypeListAllOfLabels;
    /**
     * When true, the association is a quantified association (Only available in the PIM Serenity version.)
     * @type {boolean}
     * @memberof AssociationTypeListAllOf
     */
    isQuantified?: boolean;
    /**
     * When true, the association is a two-way association (Only available in the PIM Serenity version.)
     * @type {boolean}
     * @memberof AssociationTypeListAllOf
     */
    isTwoWay?: boolean;
}

/**
 * Check if a given object implements the AssociationTypeListAllOf interface.
 */
export function instanceOfAssociationTypeListAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function AssociationTypeListAllOfFromJSON(json: any): AssociationTypeListAllOf {
    return AssociationTypeListAllOfFromJSONTyped(json, false);
}

export function AssociationTypeListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssociationTypeListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'labels': !exists(json, 'labels') ? undefined : AssociationTypeListAllOfLabelsFromJSON(json['labels']),
        'isQuantified': !exists(json, 'is_quantified') ? undefined : json['is_quantified'],
        'isTwoWay': !exists(json, 'is_two_way') ? undefined : json['is_two_way'],
    };
}

export function AssociationTypeListAllOfToJSON(value?: AssociationTypeListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'labels': AssociationTypeListAllOfLabelsToJSON(value.labels),
        'is_quantified': value.isQuantified,
        'is_two_way': value.isTwoWay,
    };
}

