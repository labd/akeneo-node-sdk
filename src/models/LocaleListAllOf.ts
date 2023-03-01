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
 * @interface LocaleListAllOf
 */
export interface LocaleListAllOf {
    /**
     * Locale code
     * @type {string}
     * @memberof LocaleListAllOf
     */
    code: string;
    /**
     * Whether the locale is enabled
     * @type {boolean}
     * @memberof LocaleListAllOf
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the LocaleListAllOf interface.
 */
export function instanceOfLocaleListAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function LocaleListAllOfFromJSON(json: any): LocaleListAllOf {
    return LocaleListAllOfFromJSONTyped(json, false);
}

export function LocaleListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocaleListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function LocaleListAllOfToJSON(value?: LocaleListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'enabled': value.enabled,
    };
}
