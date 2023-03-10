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
import type { ProductsEmbeddedItemsInnerAllOfLinksSelf } from './ProductsEmbeddedItemsInnerAllOfLinksSelf';
import {
    ProductsEmbeddedItemsInnerAllOfLinksSelfFromJSON,
    ProductsEmbeddedItemsInnerAllOfLinksSelfFromJSONTyped,
    ProductsEmbeddedItemsInnerAllOfLinksSelfToJSON,
} from './ProductsEmbeddedItemsInnerAllOfLinksSelf';
import type { ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownload } from './ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownload';
import {
    ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownloadFromJSON,
    ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownloadFromJSONTyped,
    ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownloadToJSON,
} from './ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownload';

/**
 * 
 * @export
 * @interface ReferenceEntitiesEmbeddedItemsInnerAllOfLinks
 */
export interface ReferenceEntitiesEmbeddedItemsInnerAllOfLinks {
    /**
     * 
     * @type {ProductsEmbeddedItemsInnerAllOfLinksSelf}
     * @memberof ReferenceEntitiesEmbeddedItemsInnerAllOfLinks
     */
    self?: ProductsEmbeddedItemsInnerAllOfLinksSelf;
    /**
     * 
     * @type {ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownload}
     * @memberof ReferenceEntitiesEmbeddedItemsInnerAllOfLinks
     */
    imageDownload?: ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownload;
}

/**
 * Check if a given object implements the ReferenceEntitiesEmbeddedItemsInnerAllOfLinks interface.
 */
export function instanceOfReferenceEntitiesEmbeddedItemsInnerAllOfLinks(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReferenceEntitiesEmbeddedItemsInnerAllOfLinksFromJSON(json: any): ReferenceEntitiesEmbeddedItemsInnerAllOfLinks {
    return ReferenceEntitiesEmbeddedItemsInnerAllOfLinksFromJSONTyped(json, false);
}

export function ReferenceEntitiesEmbeddedItemsInnerAllOfLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceEntitiesEmbeddedItemsInnerAllOfLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': !exists(json, 'self') ? undefined : ProductsEmbeddedItemsInnerAllOfLinksSelfFromJSON(json['self']),
        'imageDownload': !exists(json, 'image_download') ? undefined : ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownloadFromJSON(json['image_download']),
    };
}

export function ReferenceEntitiesEmbeddedItemsInnerAllOfLinksToJSON(value?: ReferenceEntitiesEmbeddedItemsInnerAllOfLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': ProductsEmbeddedItemsInnerAllOfLinksSelfToJSON(value.self),
        'image_download': ReferenceEntitiesEmbeddedItemsInnerAllOfLinksImageDownloadToJSON(value.imageDownload),
    };
}

