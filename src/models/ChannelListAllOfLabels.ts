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
 * Channel labels for each locale
 * @export
 * @interface ChannelListAllOfLabels
 */
export interface ChannelListAllOfLabels {
    /**
     * Channel label for the locale `localeCode`
     * @type {string}
     * @memberof ChannelListAllOfLabels
     */
    localeCode?: string;
}

/**
 * Check if a given object implements the ChannelListAllOfLabels interface.
 */
export function instanceOfChannelListAllOfLabels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelListAllOfLabelsFromJSON(json: any): ChannelListAllOfLabels {
    return ChannelListAllOfLabelsFromJSONTyped(json, false);
}

export function ChannelListAllOfLabelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelListAllOfLabels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeCode': !exists(json, 'localeCode') ? undefined : json['localeCode'],
    };
}

export function ChannelListAllOfLabelsToJSON(value?: ChannelListAllOfLabels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localeCode': value.localeCode,
    };
}

