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
 * @interface PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
 */
export interface PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner {
    /**
     * Attribute value
     * @type {object}
     * @memberof PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
     */
    data?: object;
    /**
     * The attribute type
     * @type {string}
     * @memberof PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
     */
    type?: string;
    /**
     * <a href='api-reference.html#Locale'>Locale</a> code of the attribute value
     * @type {string}
     * @memberof PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
     */
    locale?: string;
    /**
     * <a href='api-reference.html#Channel'>Channel</a> code of the attribute value
     * @type {string}
     * @memberof PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
     */
    channel?: string;
    /**
     * The attribute code with its uuid (attributeCode|attributeUuid)
     * @type {string}
     * @memberof PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner
     */
    attributeCode?: string;
}

/**
 * Check if a given object implements the PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner interface.
 */
export function instanceOfPostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInnerFromJSON(json: any): PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner {
    return PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInnerFromJSONTyped(json, false);
}

export function PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : json['data'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'attributeCode': !exists(json, 'attribute_code') ? undefined : json['attribute_code'],
    };
}

export function PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInnerToJSON(value?: PostCategoriesRequestValuesAttributeCodeAttributeUuidChannelCodeLocaleCodeInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
        'type': value.type,
        'locale': value.locale,
        'channel': value.channel,
        'attribute_code': value.attributeCode,
    };
}
