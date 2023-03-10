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
import type { MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInner } from './MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInner';
import {
    MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInnerFromJSON,
    MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInnerFromJSONTyped,
    MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInnerToJSON,
} from './MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInner';
import type { MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabels } from './MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabels';
import {
    MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabelsFromJSON,
    MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabelsFromJSONTyped,
    MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabelsToJSON,
} from './MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabels';

/**
 * 
 * @export
 * @interface MeasurementFamiliesGetList200ResponseUnitsUnitCode
 */
export interface MeasurementFamiliesGetList200ResponseUnitsUnitCode {
    /**
     * Measurement unit code. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
     * @type {string}
     * @memberof MeasurementFamiliesGetList200ResponseUnitsUnitCode
     */
    code?: string;
    /**
     * 
     * @type {MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabels}
     * @memberof MeasurementFamiliesGetList200ResponseUnitsUnitCode
     */
    labels?: MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabels;
    /**
     * Calculation to convert the unit from the standard unit. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
     * @type {Array<MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInner>}
     * @memberof MeasurementFamiliesGetList200ResponseUnitsUnitCode
     */
    convertFromStandard?: Array<MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInner>;
    /**
     * Measurement unit symbol. More details <a href='/concepts/target-market-settings.html#focus-on-the-units'>here</a>.
     * @type {string}
     * @memberof MeasurementFamiliesGetList200ResponseUnitsUnitCode
     */
    symbol?: string;
}

/**
 * Check if a given object implements the MeasurementFamiliesGetList200ResponseUnitsUnitCode interface.
 */
export function instanceOfMeasurementFamiliesGetList200ResponseUnitsUnitCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MeasurementFamiliesGetList200ResponseUnitsUnitCodeFromJSON(json: any): MeasurementFamiliesGetList200ResponseUnitsUnitCode {
    return MeasurementFamiliesGetList200ResponseUnitsUnitCodeFromJSONTyped(json, false);
}

export function MeasurementFamiliesGetList200ResponseUnitsUnitCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeasurementFamiliesGetList200ResponseUnitsUnitCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'labels': !exists(json, 'labels') ? undefined : MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabelsFromJSON(json['labels']),
        'convertFromStandard': !exists(json, 'convert_from_standard') ? undefined : ((json['convert_from_standard'] as Array<any>).map(MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInnerFromJSON)),
        'symbol': !exists(json, 'symbol') ? undefined : json['symbol'],
    };
}

export function MeasurementFamiliesGetList200ResponseUnitsUnitCodeToJSON(value?: MeasurementFamiliesGetList200ResponseUnitsUnitCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'labels': MeasurementFamiliesGetList200ResponseUnitsUnitCodeLabelsToJSON(value.labels),
        'convert_from_standard': value.convertFromStandard === undefined ? undefined : ((value.convertFromStandard as Array<any>).map(MeasurementFamiliesGetList200ResponseUnitsUnitCodeConvertFromStandardInnerToJSON)),
        'symbol': value.symbol,
    };
}

