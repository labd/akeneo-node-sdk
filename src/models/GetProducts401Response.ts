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
 * @interface GetProducts401Response
 */
export interface GetProducts401Response {
    /**
     * HTTP status code
     * @type {number}
     * @memberof GetProducts401Response
     */
    code?: number;
    /**
     * Message explaining the error
     * @type {string}
     * @memberof GetProducts401Response
     */
    message?: string;
}

/**
 * Check if a given object implements the GetProducts401Response interface.
 */
export function instanceOfGetProducts401Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetProducts401ResponseFromJSON(json: any): GetProducts401Response {
    return GetProducts401ResponseFromJSONTyped(json, false);
}

export function GetProducts401ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProducts401Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function GetProducts401ResponseToJSON(value?: GetProducts401Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
    };
}
