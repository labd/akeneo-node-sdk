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
import type { FamiliesEmbeddedItemsInnerAllOfAttributeRequirements } from './FamiliesEmbeddedItemsInnerAllOfAttributeRequirements';
import {
    FamiliesEmbeddedItemsInnerAllOfAttributeRequirementsFromJSON,
    FamiliesEmbeddedItemsInnerAllOfAttributeRequirementsFromJSONTyped,
    FamiliesEmbeddedItemsInnerAllOfAttributeRequirementsToJSON,
} from './FamiliesEmbeddedItemsInnerAllOfAttributeRequirements';
import type { FamiliesEmbeddedItemsInnerAllOfLabels } from './FamiliesEmbeddedItemsInnerAllOfLabels';
import {
    FamiliesEmbeddedItemsInnerAllOfLabelsFromJSON,
    FamiliesEmbeddedItemsInnerAllOfLabelsFromJSONTyped,
    FamiliesEmbeddedItemsInnerAllOfLabelsToJSON,
} from './FamiliesEmbeddedItemsInnerAllOfLabels';

/**
 * 
 * @export
 * @interface PatchFamiliesRequest
 */
export interface PatchFamiliesRequest {
    /**
     * Family code
     * @type {string}
     * @memberof PatchFamiliesRequest
     */
    code: string;
    /**
     * Attribute code used as label
     * @type {string}
     * @memberof PatchFamiliesRequest
     */
    attributeAsLabel: string;
    /**
     * Attribute code used as the main picture in the user interface (only since v2.0)
     * @type {string}
     * @memberof PatchFamiliesRequest
     */
    attributeAsImage?: string;
    /**
     * Attributes codes that compose the family
     * @type {Array<string>}
     * @memberof PatchFamiliesRequest
     */
    attributes?: Array<string>;
    /**
     * 
     * @type {FamiliesEmbeddedItemsInnerAllOfAttributeRequirements}
     * @memberof PatchFamiliesRequest
     */
    attributeRequirements?: FamiliesEmbeddedItemsInnerAllOfAttributeRequirements;
    /**
     * 
     * @type {FamiliesEmbeddedItemsInnerAllOfLabels}
     * @memberof PatchFamiliesRequest
     */
    labels?: FamiliesEmbeddedItemsInnerAllOfLabels;
}

/**
 * Check if a given object implements the PatchFamiliesRequest interface.
 */
export function instanceOfPatchFamiliesRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "attributeAsLabel" in value;

    return isInstance;
}

export function PatchFamiliesRequestFromJSON(json: any): PatchFamiliesRequest {
    return PatchFamiliesRequestFromJSONTyped(json, false);
}

export function PatchFamiliesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchFamiliesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'attributeAsLabel': json['attribute_as_label'],
        'attributeAsImage': !exists(json, 'attribute_as_image') ? undefined : json['attribute_as_image'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'attributeRequirements': !exists(json, 'attribute_requirements') ? undefined : FamiliesEmbeddedItemsInnerAllOfAttributeRequirementsFromJSON(json['attribute_requirements']),
        'labels': !exists(json, 'labels') ? undefined : FamiliesEmbeddedItemsInnerAllOfLabelsFromJSON(json['labels']),
    };
}

export function PatchFamiliesRequestToJSON(value?: PatchFamiliesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'attribute_as_label': value.attributeAsLabel,
        'attribute_as_image': value.attributeAsImage,
        'attributes': value.attributes,
        'attribute_requirements': FamiliesEmbeddedItemsInnerAllOfAttributeRequirementsToJSON(value.attributeRequirements),
        'labels': FamiliesEmbeddedItemsInnerAllOfLabelsToJSON(value.labels),
    };
}

