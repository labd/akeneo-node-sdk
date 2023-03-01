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
import type { PostCategoriesRequestLabels } from './PostCategoriesRequestLabels';
import {
    PostCategoriesRequestLabelsFromJSON,
    PostCategoriesRequestLabelsFromJSONTyped,
    PostCategoriesRequestLabelsToJSON,
} from './PostCategoriesRequestLabels';
import type { PostCategoriesRequestValues } from './PostCategoriesRequestValues';
import {
    PostCategoriesRequestValuesFromJSON,
    PostCategoriesRequestValuesFromJSONTyped,
    PostCategoriesRequestValuesToJSON,
} from './PostCategoriesRequestValues';

/**
 * 
 * @export
 * @interface PatchCategoriesRequest
 */
export interface PatchCategoriesRequest {
    /**
     * Category code
     * @type {string}
     * @memberof PatchCategoriesRequest
     */
    code: string;
    /**
     * Category code of the parent's category
     * @type {string}
     * @memberof PatchCategoriesRequest
     */
    parent?: string;
    /**
     * Date of the last update
     * @type {string}
     * @memberof PatchCategoriesRequest
     */
    updated?: string;
    /**
     * Position of the category in its level, start from 1 (only available on SaaS platforms and when query parameter "with_position" is set to "true")
     * @type {number}
     * @memberof PatchCategoriesRequest
     */
    position?: number;
    /**
     * 
     * @type {PostCategoriesRequestLabels}
     * @memberof PatchCategoriesRequest
     */
    labels?: PostCategoriesRequestLabels;
    /**
     * 
     * @type {PostCategoriesRequestValues}
     * @memberof PatchCategoriesRequest
     */
    values?: PostCategoriesRequestValues;
}

/**
 * Check if a given object implements the PatchCategoriesRequest interface.
 */
export function instanceOfPatchCategoriesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function PatchCategoriesRequestFromJSON(json: any): PatchCategoriesRequest {
    return PatchCategoriesRequestFromJSONTyped(json, false);
}

export function PatchCategoriesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchCategoriesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'labels': !exists(json, 'labels') ? undefined : PostCategoriesRequestLabelsFromJSON(json['labels']),
        'values': !exists(json, 'values') ? undefined : PostCategoriesRequestValuesFromJSON(json['values']),
    };
}

export function PatchCategoriesRequestToJSON(value?: PatchCategoriesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'parent': value.parent,
        'updated': value.updated,
        'position': value.position,
        'labels': PostCategoriesRequestLabelsToJSON(value.labels),
        'values': PostCategoriesRequestValuesToJSON(value.values),
    };
}
