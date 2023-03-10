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
import type { FamilyListAllOfAttributeRequirements } from './FamilyListAllOfAttributeRequirements';
import {
    FamilyListAllOfAttributeRequirementsFromJSON,
    FamilyListAllOfAttributeRequirementsFromJSONTyped,
    FamilyListAllOfAttributeRequirementsToJSON,
} from './FamilyListAllOfAttributeRequirements';
import type { FamilyListAllOfLabels } from './FamilyListAllOfLabels';
import {
    FamilyListAllOfLabelsFromJSON,
    FamilyListAllOfLabelsFromJSONTyped,
    FamilyListAllOfLabelsToJSON,
} from './FamilyListAllOfLabels';

/**
 * 
 * @export
 * @interface FamilyListAllOf
 */
export interface FamilyListAllOf {
    /**
     * Family code
     * @type {string}
     * @memberof FamilyListAllOf
     */
    code: string;
    /**
     * Attribute code used as label
     * @type {string}
     * @memberof FamilyListAllOf
     */
    attributeAsLabel: string;
    /**
     * Attribute code used as the main picture in the user interface (only since v2.0)
     * @type {string}
     * @memberof FamilyListAllOf
     */
    attributeAsImage?: string;
    /**
     * Attributes codes that compose the family
     * @type {Array<string>}
     * @memberof FamilyListAllOf
     */
    attributes?: Array<string>;
    /**
     * 
     * @type {FamilyListAllOfAttributeRequirements}
     * @memberof FamilyListAllOf
     */
    attributeRequirements?: FamilyListAllOfAttributeRequirements;
    /**
     * 
     * @type {FamilyListAllOfLabels}
     * @memberof FamilyListAllOf
     */
    labels?: FamilyListAllOfLabels;
}

/**
 * Check if a given object implements the FamilyListAllOf interface.
 */
export function instanceOfFamilyListAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "attributeAsLabel" in value;

    return isInstance;
}

export function FamilyListAllOfFromJSON(json: any): FamilyListAllOf {
    return FamilyListAllOfFromJSONTyped(json, false);
}

export function FamilyListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): FamilyListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'attributeAsLabel': json['attribute_as_label'],
        'attributeAsImage': !exists(json, 'attribute_as_image') ? undefined : json['attribute_as_image'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
        'attributeRequirements': !exists(json, 'attribute_requirements') ? undefined : FamilyListAllOfAttributeRequirementsFromJSON(json['attribute_requirements']),
        'labels': !exists(json, 'labels') ? undefined : FamilyListAllOfLabelsFromJSON(json['labels']),
    };
}

export function FamilyListAllOfToJSON(value?: FamilyListAllOf | null): any {
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
        'attribute_requirements': FamilyListAllOfAttributeRequirementsToJSON(value.attributeRequirements),
        'labels': FamilyListAllOfLabelsToJSON(value.labels),
    };
}

