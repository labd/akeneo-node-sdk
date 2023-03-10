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
import type { FamiliesEmbeddedItemsInner } from './FamiliesEmbeddedItemsInner';
import {
    FamiliesEmbeddedItemsInnerFromJSON,
    FamiliesEmbeddedItemsInnerFromJSONTyped,
    FamiliesEmbeddedItemsInnerToJSON,
} from './FamiliesEmbeddedItemsInner';

/**
 * 
 * @export
 * @interface FamiliesEmbedded
 */
export interface FamiliesEmbedded {
    /**
     * 
     * @type {Array<FamiliesEmbeddedItemsInner>}
     * @memberof FamiliesEmbedded
     */
    items?: Array<FamiliesEmbeddedItemsInner>;
}

/**
 * Check if a given object implements the FamiliesEmbedded interface.
 */
export function instanceOfFamiliesEmbedded(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FamiliesEmbeddedFromJSON(json: any): FamiliesEmbedded {
    return FamiliesEmbeddedFromJSONTyped(json, false);
}

export function FamiliesEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): FamiliesEmbedded {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(FamiliesEmbeddedItemsInnerFromJSON)),
    };
}

export function FamiliesEmbeddedToJSON(value?: FamiliesEmbedded | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(FamiliesEmbeddedItemsInnerToJSON)),
    };
}

