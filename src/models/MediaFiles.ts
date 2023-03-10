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
import type { MediaFilesEmbedded } from './MediaFilesEmbedded';
import {
    MediaFilesEmbeddedFromJSON,
    MediaFilesEmbeddedFromJSONTyped,
    MediaFilesEmbeddedToJSON,
} from './MediaFilesEmbedded';
import type { ProductsLinks } from './ProductsLinks';
import {
    ProductsLinksFromJSON,
    ProductsLinksFromJSONTyped,
    ProductsLinksToJSON,
} from './ProductsLinks';

/**
 * 
 * @export
 * @interface MediaFiles
 */
export interface MediaFiles {
    /**
     * 
     * @type {MediaFilesEmbedded}
     * @memberof MediaFiles
     */
    embedded?: MediaFilesEmbedded;
    /**
     * 
     * @type {ProductsLinks}
     * @memberof MediaFiles
     */
    links?: ProductsLinks;
    /**
     * Current page number
     * @type {number}
     * @memberof MediaFiles
     */
    currentPage?: number;
}

/**
 * Check if a given object implements the MediaFiles interface.
 */
export function instanceOfMediaFiles(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MediaFilesFromJSON(json: any): MediaFiles {
    return MediaFilesFromJSONTyped(json, false);
}

export function MediaFilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaFiles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : MediaFilesEmbeddedFromJSON(json['_embedded']),
        'links': !exists(json, '_links') ? undefined : ProductsLinksFromJSON(json['_links']),
        'currentPage': !exists(json, 'current_page') ? undefined : json['current_page'],
    };
}

export function MediaFilesToJSON(value?: MediaFiles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': MediaFilesEmbeddedToJSON(value.embedded),
        '_links': ProductsLinksToJSON(value.links),
        'current_page': value.currentPage,
    };
}

