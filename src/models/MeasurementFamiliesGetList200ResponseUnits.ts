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
import type { MeasurementFamiliesGetList200ResponseUnitsUnitCode } from './MeasurementFamiliesGetList200ResponseUnitsUnitCode';
import {
    MeasurementFamiliesGetList200ResponseUnitsUnitCodeFromJSON,
    MeasurementFamiliesGetList200ResponseUnitsUnitCodeFromJSONTyped,
    MeasurementFamiliesGetList200ResponseUnitsUnitCodeToJSON,
} from './MeasurementFamiliesGetList200ResponseUnitsUnitCode';

/**
 * Measurement units for this family with their conversion operations. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
 * @export
 * @interface MeasurementFamiliesGetList200ResponseUnits
 */
export interface MeasurementFamiliesGetList200ResponseUnits {
    /**
     * 
     * @type {MeasurementFamiliesGetList200ResponseUnitsUnitCode}
     * @memberof MeasurementFamiliesGetList200ResponseUnits
     */
    unitCode?: MeasurementFamiliesGetList200ResponseUnitsUnitCode;
}

/**
 * Check if a given object implements the MeasurementFamiliesGetList200ResponseUnits interface.
 */
export function instanceOfMeasurementFamiliesGetList200ResponseUnits(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MeasurementFamiliesGetList200ResponseUnitsFromJSON(json: any): MeasurementFamiliesGetList200ResponseUnits {
    return MeasurementFamiliesGetList200ResponseUnitsFromJSONTyped(json, false);
}

export function MeasurementFamiliesGetList200ResponseUnitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeasurementFamiliesGetList200ResponseUnits {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'unitCode': !exists(json, 'unitCode') ? undefined : MeasurementFamiliesGetList200ResponseUnitsUnitCodeFromJSON(json['unitCode']),
    };
}

export function MeasurementFamiliesGetList200ResponseUnitsToJSON(value?: MeasurementFamiliesGetList200ResponseUnits | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'unitCode': MeasurementFamiliesGetList200ResponseUnitsUnitCodeToJSON(value.unitCode),
    };
}
