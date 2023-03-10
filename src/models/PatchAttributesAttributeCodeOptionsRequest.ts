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
import type { AttributeOptionsEmbeddedItemsInnerAllOfLabels } from './AttributeOptionsEmbeddedItemsInnerAllOfLabels';
import {
    AttributeOptionsEmbeddedItemsInnerAllOfLabelsFromJSON,
    AttributeOptionsEmbeddedItemsInnerAllOfLabelsFromJSONTyped,
    AttributeOptionsEmbeddedItemsInnerAllOfLabelsToJSON,
} from './AttributeOptionsEmbeddedItemsInnerAllOfLabels';

/**
 * 
 * @export
 * @interface PatchAttributesAttributeCodeOptionsRequest
 */
export interface PatchAttributesAttributeCodeOptionsRequest {
    /**
     * Code of option
     * @type {string}
     * @memberof PatchAttributesAttributeCodeOptionsRequest
     */
    code: string;
    /**
     * Code of attribute related to the attribute option
     * @type {string}
     * @memberof PatchAttributesAttributeCodeOptionsRequest
     */
    attribute?: string;
    /**
     * Order of attribute option
     * @type {number}
     * @memberof PatchAttributesAttributeCodeOptionsRequest
     */
    sortOrder?: number;
    /**
     * 
     * @type {AttributeOptionsEmbeddedItemsInnerAllOfLabels}
     * @memberof PatchAttributesAttributeCodeOptionsRequest
     */
    labels?: AttributeOptionsEmbeddedItemsInnerAllOfLabels;
}

/**
 * Check if a given object implements the PatchAttributesAttributeCodeOptionsRequest interface.
 */
export function instanceOfPatchAttributesAttributeCodeOptionsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function PatchAttributesAttributeCodeOptionsRequestFromJSON(json: any): PatchAttributesAttributeCodeOptionsRequest {
    return PatchAttributesAttributeCodeOptionsRequestFromJSONTyped(json, false);
}

export function PatchAttributesAttributeCodeOptionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchAttributesAttributeCodeOptionsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'attribute': !exists(json, 'attribute') ? undefined : json['attribute'],
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'labels': !exists(json, 'labels') ? undefined : AttributeOptionsEmbeddedItemsInnerAllOfLabelsFromJSON(json['labels']),
    };
}

export function PatchAttributesAttributeCodeOptionsRequestToJSON(value?: PatchAttributesAttributeCodeOptionsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'attribute': value.attribute,
        'sort_order': value.sortOrder,
        'labels': AttributeOptionsEmbeddedItemsInnerAllOfLabelsToJSON(value.labels),
    };
}

