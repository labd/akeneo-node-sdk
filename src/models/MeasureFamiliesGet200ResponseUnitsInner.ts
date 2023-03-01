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
 * 
 * @export
 * @interface MeasureFamiliesGet200ResponseUnitsInner
 */
export interface MeasureFamiliesGet200ResponseUnitsInner {
    /**
     * Measure code
     * @type {string}
     * @memberof MeasureFamiliesGet200ResponseUnitsInner
     */
    code?: string;
    /**
     * Mathematic operation to convert the unit into the standard unit
     * @type {object}
     * @memberof MeasureFamiliesGet200ResponseUnitsInner
     */
    convert?: object;
    /**
     * Measure symbol
     * @type {string}
     * @memberof MeasureFamiliesGet200ResponseUnitsInner
     */
    symbol?: string;
}

/**
 * Check if a given object implements the MeasureFamiliesGet200ResponseUnitsInner interface.
 */
export function instanceOfMeasureFamiliesGet200ResponseUnitsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MeasureFamiliesGet200ResponseUnitsInnerFromJSON(json: any): MeasureFamiliesGet200ResponseUnitsInner {
    return MeasureFamiliesGet200ResponseUnitsInnerFromJSONTyped(json, false);
}

export function MeasureFamiliesGet200ResponseUnitsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeasureFamiliesGet200ResponseUnitsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'convert': !exists(json, 'convert') ? undefined : json['convert'],
        'symbol': !exists(json, 'symbol') ? undefined : json['symbol'],
    };
}

export function MeasureFamiliesGet200ResponseUnitsInnerToJSON(value?: MeasureFamiliesGet200ResponseUnitsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'convert': value.convert,
        'symbol': value.symbol,
    };
}
