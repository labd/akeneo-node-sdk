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
 * @interface ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner
 */
export interface ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner {
    /**
     * Channel code of the reference entity record value
     * @type {string}
     * @memberof ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner
     */
    channel?: string;
    /**
     * Locale code of the reference entity record value
     * @type {string}
     * @memberof ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner
     */
    locale?: string;
    /**
     * Reference entity record value. See <a href='/concepts/reference-entities.html#the-data-format'>the `data` format</a> section for more details.
     * @type {object}
     * @memberof ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner
     */
    data?: object;
}

/**
 * Check if a given object implements the ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner interface.
 */
export function instanceOfReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInnerFromJSON(json: any): ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner {
    return ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInnerFromJSONTyped(json, false);
}

export function ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInnerToJSON(value?: ReferenceEntityRecordEmbeddedItemsInnerAllOfValuesValueInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel': value.channel,
        'locale': value.locale,
        'data': value.data,
    };
}
