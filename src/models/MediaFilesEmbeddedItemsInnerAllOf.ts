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
import type { MediaFilesEmbeddedItemsInnerAllOfLinks } from './MediaFilesEmbeddedItemsInnerAllOfLinks';
import {
    MediaFilesEmbeddedItemsInnerAllOfLinksFromJSON,
    MediaFilesEmbeddedItemsInnerAllOfLinksFromJSONTyped,
    MediaFilesEmbeddedItemsInnerAllOfLinksToJSON,
} from './MediaFilesEmbeddedItemsInnerAllOfLinks';

/**
 * 
 * @export
 * @interface MediaFilesEmbeddedItemsInnerAllOf
 */
export interface MediaFilesEmbeddedItemsInnerAllOf {
    /**
     * 
     * @type {MediaFilesEmbeddedItemsInnerAllOfLinks}
     * @memberof MediaFilesEmbeddedItemsInnerAllOf
     */
    links?: MediaFilesEmbeddedItemsInnerAllOfLinks;
}

/**
 * Check if a given object implements the MediaFilesEmbeddedItemsInnerAllOf interface.
 */
export function instanceOfMediaFilesEmbeddedItemsInnerAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MediaFilesEmbeddedItemsInnerAllOfFromJSON(json: any): MediaFilesEmbeddedItemsInnerAllOf {
    return MediaFilesEmbeddedItemsInnerAllOfFromJSONTyped(json, false);
}

export function MediaFilesEmbeddedItemsInnerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaFilesEmbeddedItemsInnerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : MediaFilesEmbeddedItemsInnerAllOfLinksFromJSON(json['_links']),
    };
}

export function MediaFilesEmbeddedItemsInnerAllOfToJSON(value?: MediaFilesEmbeddedItemsInnerAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': MediaFilesEmbeddedItemsInnerAllOfLinksToJSON(value.links),
    };
}
