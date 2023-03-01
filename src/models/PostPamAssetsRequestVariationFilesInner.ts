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
import type { PostPamAssetsRequestVariationFilesInnerLink } from './PostPamAssetsRequestVariationFilesInnerLink';
import {
    PostPamAssetsRequestVariationFilesInnerLinkFromJSON,
    PostPamAssetsRequestVariationFilesInnerLinkFromJSONTyped,
    PostPamAssetsRequestVariationFilesInnerLinkToJSON,
} from './PostPamAssetsRequestVariationFilesInnerLink';

/**
 * 
 * @export
 * @interface PostPamAssetsRequestVariationFilesInner
 */
export interface PostPamAssetsRequestVariationFilesInner {
    /**
     * 
     * @type {PostPamAssetsRequestVariationFilesInnerLink}
     * @memberof PostPamAssetsRequestVariationFilesInner
     */
    link?: PostPamAssetsRequestVariationFilesInnerLink;
    /**
     * Locale code of the variation
     * @type {string}
     * @memberof PostPamAssetsRequestVariationFilesInner
     */
    locale?: string;
    /**
     * Channel code of the variation
     * @type {string}
     * @memberof PostPamAssetsRequestVariationFilesInner
     */
    scope?: string;
    /**
     * Code of the variation
     * @type {string}
     * @memberof PostPamAssetsRequestVariationFilesInner
     */
    code?: string;
}

/**
 * Check if a given object implements the PostPamAssetsRequestVariationFilesInner interface.
 */
export function instanceOfPostPamAssetsRequestVariationFilesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostPamAssetsRequestVariationFilesInnerFromJSON(json: any): PostPamAssetsRequestVariationFilesInner {
    return PostPamAssetsRequestVariationFilesInnerFromJSONTyped(json, false);
}

export function PostPamAssetsRequestVariationFilesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostPamAssetsRequestVariationFilesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'link': !exists(json, '_link') ? undefined : PostPamAssetsRequestVariationFilesInnerLinkFromJSON(json['_link']),
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function PostPamAssetsRequestVariationFilesInnerToJSON(value?: PostPamAssetsRequestVariationFilesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_link': PostPamAssetsRequestVariationFilesInnerLinkToJSON(value.link),
        'locale': value.locale,
        'scope': value.scope,
        'code': value.code,
    };
}
