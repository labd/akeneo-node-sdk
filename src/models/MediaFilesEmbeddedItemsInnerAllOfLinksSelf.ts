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
 * @interface MediaFilesEmbeddedItemsInnerAllOfLinksSelf
 */
export interface MediaFilesEmbeddedItemsInnerAllOfLinksSelf {
    /**
     * URI to get the metadata of the media file
     * @type {string}
     * @memberof MediaFilesEmbeddedItemsInnerAllOfLinksSelf
     */
    href?: string;
}

/**
 * Check if a given object implements the MediaFilesEmbeddedItemsInnerAllOfLinksSelf interface.
 */
export function instanceOfMediaFilesEmbeddedItemsInnerAllOfLinksSelf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MediaFilesEmbeddedItemsInnerAllOfLinksSelfFromJSON(json: any): MediaFilesEmbeddedItemsInnerAllOfLinksSelf {
    return MediaFilesEmbeddedItemsInnerAllOfLinksSelfFromJSONTyped(json, false);
}

export function MediaFilesEmbeddedItemsInnerAllOfLinksSelfFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaFilesEmbeddedItemsInnerAllOfLinksSelf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'href': !exists(json, 'href') ? undefined : json['href'],
    };
}

export function MediaFilesEmbeddedItemsInnerAllOfLinksSelfToJSON(value?: MediaFilesEmbeddedItemsInnerAllOfLinksSelf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'href': value.href,
    };
}

