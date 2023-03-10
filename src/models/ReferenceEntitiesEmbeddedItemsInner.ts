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
import type { ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels } from './ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels';
import {
    ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsFromJSON,
    ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsFromJSONTyped,
    ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsToJSON,
} from './ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels';
import type { ReferenceEntitiesEmbeddedItemsInnerAllOfLinks } from './ReferenceEntitiesEmbeddedItemsInnerAllOfLinks';
import {
    ReferenceEntitiesEmbeddedItemsInnerAllOfLinksFromJSON,
    ReferenceEntitiesEmbeddedItemsInnerAllOfLinksFromJSONTyped,
    ReferenceEntitiesEmbeddedItemsInnerAllOfLinksToJSON,
} from './ReferenceEntitiesEmbeddedItemsInnerAllOfLinks';

/**
 * 
 * @export
 * @interface ReferenceEntitiesEmbeddedItemsInner
 */
export interface ReferenceEntitiesEmbeddedItemsInner {
    /**
     * 
     * @type {ReferenceEntitiesEmbeddedItemsInnerAllOfLinks}
     * @memberof ReferenceEntitiesEmbeddedItemsInner
     */
    links?: ReferenceEntitiesEmbeddedItemsInnerAllOfLinks;
    /**
     * Reference entity code
     * @type {string}
     * @memberof ReferenceEntitiesEmbeddedItemsInner
     */
    code: string;
    /**
     * 
     * @type {ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels}
     * @memberof ReferenceEntitiesEmbeddedItemsInner
     */
    labels?: ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels;
    /**
     * Code of the reference entity image
     * @type {string}
     * @memberof ReferenceEntitiesEmbeddedItemsInner
     */
    image?: string;
}

/**
 * Check if a given object implements the ReferenceEntitiesEmbeddedItemsInner interface.
 */
export function instanceOfReferenceEntitiesEmbeddedItemsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ReferenceEntitiesEmbeddedItemsInnerFromJSON(json: any): ReferenceEntitiesEmbeddedItemsInner {
    return ReferenceEntitiesEmbeddedItemsInnerFromJSONTyped(json, false);
}

export function ReferenceEntitiesEmbeddedItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceEntitiesEmbeddedItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ReferenceEntitiesEmbeddedItemsInnerAllOfLinksFromJSON(json['_links']),
        'code': json['code'],
        'labels': !exists(json, 'labels') ? undefined : ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsFromJSON(json['labels']),
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function ReferenceEntitiesEmbeddedItemsInnerToJSON(value?: ReferenceEntitiesEmbeddedItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ReferenceEntitiesEmbeddedItemsInnerAllOfLinksToJSON(value.links),
        'code': value.code,
        'labels': ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsToJSON(value.labels),
        'image': value.image,
    };
}

