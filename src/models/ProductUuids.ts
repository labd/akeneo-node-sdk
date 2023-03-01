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
import type { ReferenceEntitiesLinks } from './ReferenceEntitiesLinks';
import {
    ReferenceEntitiesLinksFromJSON,
    ReferenceEntitiesLinksFromJSONTyped,
    ReferenceEntitiesLinksToJSON,
} from './ReferenceEntitiesLinks';

/**
 * 
 * @export
 * @interface ProductUuids
 */
export interface ProductUuids {
    /**
     * 
     * @type {ReferenceEntitiesLinks}
     * @memberof ProductUuids
     */
    links?: ReferenceEntitiesLinks;
}

/**
 * Check if a given object implements the ProductUuids interface.
 */
export function instanceOfProductUuids(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductUuidsFromJSON(json: any): ProductUuids {
    return ProductUuidsFromJSONTyped(json, false);
}

export function ProductUuidsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductUuids {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ReferenceEntitiesLinksFromJSON(json['_links']),
    };
}

export function ProductUuidsToJSON(value?: ProductUuids | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ReferenceEntitiesLinksToJSON(value.links),
    };
}
