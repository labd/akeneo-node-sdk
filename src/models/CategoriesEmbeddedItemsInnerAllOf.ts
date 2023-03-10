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
import type { CategoriesEmbeddedItemsInnerAllOfLabels } from './CategoriesEmbeddedItemsInnerAllOfLabels';
import {
    CategoriesEmbeddedItemsInnerAllOfLabelsFromJSON,
    CategoriesEmbeddedItemsInnerAllOfLabelsFromJSONTyped,
    CategoriesEmbeddedItemsInnerAllOfLabelsToJSON,
} from './CategoriesEmbeddedItemsInnerAllOfLabels';
import type { CategoriesEmbeddedItemsInnerAllOfValues } from './CategoriesEmbeddedItemsInnerAllOfValues';
import {
    CategoriesEmbeddedItemsInnerAllOfValuesFromJSON,
    CategoriesEmbeddedItemsInnerAllOfValuesFromJSONTyped,
    CategoriesEmbeddedItemsInnerAllOfValuesToJSON,
} from './CategoriesEmbeddedItemsInnerAllOfValues';

/**
 * 
 * @export
 * @interface CategoriesEmbeddedItemsInnerAllOf
 */
export interface CategoriesEmbeddedItemsInnerAllOf {
    /**
     * Category code
     * @type {string}
     * @memberof CategoriesEmbeddedItemsInnerAllOf
     */
    code: string;
    /**
     * Category code of the parent's category
     * @type {string}
     * @memberof CategoriesEmbeddedItemsInnerAllOf
     */
    parent?: string;
    /**
     * Date of the last update
     * @type {string}
     * @memberof CategoriesEmbeddedItemsInnerAllOf
     */
    updated?: string;
    /**
     * Position of the category in its level, start from 1 (only available since the 7.0 version and when query parameter "with_position" is set to "true")
     * @type {number}
     * @memberof CategoriesEmbeddedItemsInnerAllOf
     */
    position?: number;
    /**
     * 
     * @type {CategoriesEmbeddedItemsInnerAllOfLabels}
     * @memberof CategoriesEmbeddedItemsInnerAllOf
     */
    labels?: CategoriesEmbeddedItemsInnerAllOfLabels;
    /**
     * 
     * @type {CategoriesEmbeddedItemsInnerAllOfValues}
     * @memberof CategoriesEmbeddedItemsInnerAllOf
     */
    values?: CategoriesEmbeddedItemsInnerAllOfValues;
}

/**
 * Check if a given object implements the CategoriesEmbeddedItemsInnerAllOf interface.
 */
export function instanceOfCategoriesEmbeddedItemsInnerAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function CategoriesEmbeddedItemsInnerAllOfFromJSON(json: any): CategoriesEmbeddedItemsInnerAllOf {
    return CategoriesEmbeddedItemsInnerAllOfFromJSONTyped(json, false);
}

export function CategoriesEmbeddedItemsInnerAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoriesEmbeddedItemsInnerAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'parent': !exists(json, 'parent') ? undefined : json['parent'],
        'updated': !exists(json, 'updated') ? undefined : json['updated'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'labels': !exists(json, 'labels') ? undefined : CategoriesEmbeddedItemsInnerAllOfLabelsFromJSON(json['labels']),
        'values': !exists(json, 'values') ? undefined : CategoriesEmbeddedItemsInnerAllOfValuesFromJSON(json['values']),
    };
}

export function CategoriesEmbeddedItemsInnerAllOfToJSON(value?: CategoriesEmbeddedItemsInnerAllOf | null): any {
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
        'labels': CategoriesEmbeddedItemsInnerAllOfLabelsToJSON(value.labels),
        'values': CategoriesEmbeddedItemsInnerAllOfValuesToJSON(value.values),
    };
}

