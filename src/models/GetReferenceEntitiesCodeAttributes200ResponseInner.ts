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
import type { AttributesEmbeddedItemsInnerAllOfLabels } from './AttributesEmbeddedItemsInnerAllOfLabels';
import {
    AttributesEmbeddedItemsInnerAllOfLabelsFromJSON,
    AttributesEmbeddedItemsInnerAllOfLabelsFromJSONTyped,
    AttributesEmbeddedItemsInnerAllOfLabelsToJSON,
} from './AttributesEmbeddedItemsInnerAllOfLabels';

/**
 * 
 * @export
 * @interface GetReferenceEntitiesCodeAttributes200ResponseInner
 */
export interface GetReferenceEntitiesCodeAttributes200ResponseInner {
    /**
     * Attribute code
     * @type {string}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    code: string;
    /**
     * 
     * @type {AttributesEmbeddedItemsInnerAllOfLabels}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    labels?: AttributesEmbeddedItemsInnerAllOfLabels;
    /**
     * Attribute type. See <a href='/concepts/reference-entities.html#reference-entity-attribute'>type</a> section for more details.
     * @type {string}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    type: GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum;
    /**
     * Whether the attribute is localizable, i.e. can have one value by locale
     * @type {boolean}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    valuePerLocale?: boolean;
    /**
     * Whether the attribute is scopable, i.e. can have one value by channel
     * @type {boolean}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    valuePerChannel?: boolean;
    /**
     * Whether the attribute should be part of the record's completeness calculation
     * @type {boolean}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    isRequiredForCompleteness?: boolean;
    /**
     * Maximum number of characters allowed for the value of the attribute when the attribute type is `text`
     * @type {number}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    maxCharacters?: number;
    /**
     * Whether the UI should display a text area instead of a simple field when the attribute type is `text`
     * @type {boolean}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    isTextarea?: boolean;
    /**
     * Whether the UI should display a rich text editor instead of a simple text area when the attribute type is `text`
     * @type {boolean}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    isRichTextEditor?: boolean;
    /**
     * Validation rule type used to validate the attribute value when the attribute type is `text`
     * @type {string}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    validationRule?: GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum;
    /**
     * Regexp expression used to validate the attribute value when the attribute type is `text`
     * @type {string}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    validationRegexp?: string;
    /**
     * Extensions allowed when the attribute type is `image`
     * @type {Array<string>}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    allowedExtensions?: Array<string>;
    /**
     * Max file size in MB when the attribute type is `image`
     * @type {string}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    maxFileSize?: string;
    /**
     * Code of the linked reference entity when the attribute type is `reference_entity_single_link` or `reference_entity_multiple_links`
     * @type {string}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    referenceEntityCode?: string;
    /**
     * Whether decimals are allowed when the attribute type is `number`
     * @type {boolean}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    decimalsAllowed?: boolean;
    /**
     * Minimum value allowed when the attribute type is `number`
     * @type {string}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    minValue?: string;
    /**
     * Maximum value allowed when the attribute type is `number`
     * @type {string}
     * @memberof GetReferenceEntitiesCodeAttributes200ResponseInner
     */
    maxValue?: string;
}


/**
 * @export
 */
export const GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum = {
    Text: 'text',
    Image: 'image',
    Number: 'number',
    SingleOption: 'single_option',
    MultipleOptions: 'multiple_options',
    ReferenceEntitySingleLink: 'reference_entity_single_link',
    ReferenceEntityMultipleLinks: 'reference_entity_multiple_links'
} as const;
export type GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum = typeof GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum[keyof typeof GetReferenceEntitiesCodeAttributes200ResponseInnerTypeEnum];

/**
 * @export
 */
export const GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum = {
    Email: 'email',
    Url: 'url',
    Regexp: 'regexp',
    None: 'none'
} as const;
export type GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum = typeof GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum[keyof typeof GetReferenceEntitiesCodeAttributes200ResponseInnerValidationRuleEnum];


/**
 * Check if a given object implements the GetReferenceEntitiesCodeAttributes200ResponseInner interface.
 */
export function instanceOfGetReferenceEntitiesCodeAttributes200ResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function GetReferenceEntitiesCodeAttributes200ResponseInnerFromJSON(json: any): GetReferenceEntitiesCodeAttributes200ResponseInner {
    return GetReferenceEntitiesCodeAttributes200ResponseInnerFromJSONTyped(json, false);
}

export function GetReferenceEntitiesCodeAttributes200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetReferenceEntitiesCodeAttributes200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'labels': !exists(json, 'labels') ? undefined : AttributesEmbeddedItemsInnerAllOfLabelsFromJSON(json['labels']),
        'type': json['type'],
        'valuePerLocale': !exists(json, 'value_per_locale') ? undefined : json['value_per_locale'],
        'valuePerChannel': !exists(json, 'value_per_channel') ? undefined : json['value_per_channel'],
        'isRequiredForCompleteness': !exists(json, 'is_required_for_completeness') ? undefined : json['is_required_for_completeness'],
        'maxCharacters': !exists(json, 'max_characters') ? undefined : json['max_characters'],
        'isTextarea': !exists(json, 'is_textarea') ? undefined : json['is_textarea'],
        'isRichTextEditor': !exists(json, 'is_rich_text_editor') ? undefined : json['is_rich_text_editor'],
        'validationRule': !exists(json, 'validation_rule') ? undefined : json['validation_rule'],
        'validationRegexp': !exists(json, 'validation_regexp') ? undefined : json['validation_regexp'],
        'allowedExtensions': !exists(json, 'allowed_extensions') ? undefined : json['allowed_extensions'],
        'maxFileSize': !exists(json, 'max_file_size') ? undefined : json['max_file_size'],
        'referenceEntityCode': !exists(json, 'reference_entity_code') ? undefined : json['reference_entity_code'],
        'decimalsAllowed': !exists(json, 'decimals_allowed') ? undefined : json['decimals_allowed'],
        'minValue': !exists(json, 'min_value') ? undefined : json['min_value'],
        'maxValue': !exists(json, 'max_value') ? undefined : json['max_value'],
    };
}

export function GetReferenceEntitiesCodeAttributes200ResponseInnerToJSON(value?: GetReferenceEntitiesCodeAttributes200ResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'labels': AttributesEmbeddedItemsInnerAllOfLabelsToJSON(value.labels),
        'type': value.type,
        'value_per_locale': value.valuePerLocale,
        'value_per_channel': value.valuePerChannel,
        'is_required_for_completeness': value.isRequiredForCompleteness,
        'max_characters': value.maxCharacters,
        'is_textarea': value.isTextarea,
        'is_rich_text_editor': value.isRichTextEditor,
        'validation_rule': value.validationRule,
        'validation_regexp': value.validationRegexp,
        'allowed_extensions': value.allowedExtensions,
        'max_file_size': value.maxFileSize,
        'reference_entity_code': value.referenceEntityCode,
        'decimals_allowed': value.decimalsAllowed,
        'min_value': value.minValue,
        'max_value': value.maxValue,
    };
}

