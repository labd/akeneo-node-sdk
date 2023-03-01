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
import type { AttributeListAllOfLabels1 } from './AttributeListAllOfLabels1';
import {
    AttributeListAllOfLabels1FromJSON,
    AttributeListAllOfLabels1FromJSONTyped,
    AttributeListAllOfLabels1ToJSON,
} from './AttributeListAllOfLabels1';
import type { AttributeListAllOfValidations } from './AttributeListAllOfValidations';
import {
    AttributeListAllOfValidationsFromJSON,
    AttributeListAllOfValidationsFromJSONTyped,
    AttributeListAllOfValidationsToJSON,
} from './AttributeListAllOfValidations';

/**
 * 
 * @export
 * @interface AttributeListAllOfTableConfiguration
 */
export interface AttributeListAllOfTableConfiguration {
    /**
     * Column code
     * @type {string}
     * @memberof AttributeListAllOfTableConfiguration
     */
    code: string;
    /**
     * Column data type
     * @type {string}
     * @memberof AttributeListAllOfTableConfiguration
     */
    dataType: AttributeListAllOfTableConfigurationDataTypeEnum;
    /**
     * 
     * @type {AttributeListAllOfValidations}
     * @memberof AttributeListAllOfTableConfiguration
     */
    validations?: AttributeListAllOfValidations;
    /**
     * 
     * @type {AttributeListAllOfLabels1}
     * @memberof AttributeListAllOfTableConfiguration
     */
    labels?: AttributeListAllOfLabels1;
    /**
     * Defines if the column should be entirely filled for the attribute to be considered complete
     * @type {boolean}
     * @memberof AttributeListAllOfTableConfiguration
     */
    isRequiredForCompleteness?: boolean;
}


/**
 * @export
 */
export const AttributeListAllOfTableConfigurationDataTypeEnum = {
    Select: 'select',
    Text: 'text',
    Number: 'number',
    Boolean: 'boolean'
} as const;
export type AttributeListAllOfTableConfigurationDataTypeEnum = typeof AttributeListAllOfTableConfigurationDataTypeEnum[keyof typeof AttributeListAllOfTableConfigurationDataTypeEnum];


/**
 * Check if a given object implements the AttributeListAllOfTableConfiguration interface.
 */
export function instanceOfAttributeListAllOfTableConfiguration(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "dataType" in value;

    return isInstance;
}

export function AttributeListAllOfTableConfigurationFromJSON(json: any): AttributeListAllOfTableConfiguration {
    return AttributeListAllOfTableConfigurationFromJSONTyped(json, false);
}

export function AttributeListAllOfTableConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeListAllOfTableConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'dataType': json['data_type'],
        'validations': !exists(json, 'validations') ? undefined : AttributeListAllOfValidationsFromJSON(json['validations']),
        'labels': !exists(json, 'labels') ? undefined : AttributeListAllOfLabels1FromJSON(json['labels']),
        'isRequiredForCompleteness': !exists(json, 'is_required_for_completeness') ? undefined : json['is_required_for_completeness'],
    };
}

export function AttributeListAllOfTableConfigurationToJSON(value?: AttributeListAllOfTableConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'data_type': value.dataType,
        'validations': AttributeListAllOfValidationsToJSON(value.validations),
        'labels': AttributeListAllOfLabels1ToJSON(value.labels),
        'is_required_for_completeness': value.isRequiredForCompleteness,
    };
}
