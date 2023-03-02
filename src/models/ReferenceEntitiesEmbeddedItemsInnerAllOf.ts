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
import type { ReferenceEntitiesEmbeddedItemsInnerAllOfLinks } from './ReferenceEntitiesEmbeddedItemsInnerAllOfLinks';
import {
    ReferenceEntitiesEmbeddedItemsInnerAllOfLinksFromJSON,
    ReferenceEntitiesEmbeddedItemsInnerAllOfLinksFromJSONTyped,
    ReferenceEntitiesEmbeddedItemsInnerAllOfLinksToJSON,
} from './ReferenceEntitiesEmbeddedItemsInnerAllOfLinks';

/**
 * 
 * @export
 * @interface ReferenceEntitiesEmbeddedItemsInnerAllOf
 */
export interface ReferenceEntitiesEmbeddedItemsInnerAllOf {
    /**
     * 
     * @type {ReferenceEntitiesEmbeddedItemsInnerAllOfLinks}
     * @memberof ReferenceEntitiesEmbeddedItemsInnerAllOf
     */
    links?: ReferenceEntitiesEmbeddedItemsInnerAllOfLinks;
}

/**
 * Check if a given object implements the ReferenceEntitiesEmbeddedItemsInnerAllOf interface.
 */
export function instanceOfReferenceEntitiesEmbeddedItemsInnerAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReferenceEntitiesEmbeddedItemsInnerAllOfFromJSON(json: any): ReferenceEntitiesEmbeddedItemsInnerAllOf {
    return ReferenceEntitiesEmbeddedItemsInnerAllOfFromJSONTyped(json, false);
}

export function ReferenceEntitiesEmbeddedItemsInnerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceEntitiesEmbeddedItemsInnerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ReferenceEntitiesEmbeddedItemsInnerAllOfLinksFromJSON(json['_links']),
    };
}

export function ReferenceEntitiesEmbeddedItemsInnerAllOfToJSON(value?: ReferenceEntitiesEmbeddedItemsInnerAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ReferenceEntitiesEmbeddedItemsInnerAllOfLinksToJSON(value.links),
    };
}
