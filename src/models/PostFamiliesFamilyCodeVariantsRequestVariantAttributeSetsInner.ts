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
 * Enrichment level
 * @export
 * @interface PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner
 */
export interface PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner {
    /**
     * Enrichment level
     * @type {number}
     * @memberof PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner
     */
    level: number;
    /**
     * Codes of attributes used as variant axes
     * @type {Array<string>}
     * @memberof PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner
     */
    axes: Array<string>;
    /**
     * Codes of attributes bind to this enrichment level
     * @type {Array<string>}
     * @memberof PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner
     */
    attributes?: Array<string>;
}

/**
 * Check if a given object implements the PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner interface.
 */
export function instanceOfPostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "level" in value;
    isInstance = isInstance && "axes" in value;

    return isInstance;
}

export function PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInnerFromJSON(json: any): PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner {
    return PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInnerFromJSONTyped(json, false);
}

export function PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'level': json['level'],
        'axes': json['axes'],
        'attributes': !exists(json, 'attributes') ? undefined : json['attributes'],
    };
}

export function PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInnerToJSON(value?: PostFamiliesFamilyCodeVariantsRequestVariantAttributeSetsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'level': value.level,
        'axes': value.axes,
        'attributes': value.attributes,
    };
}
