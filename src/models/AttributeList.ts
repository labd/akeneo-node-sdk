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
import type { AttributeListAllOfGroupLabels } from './AttributeListAllOfGroupLabels';
import {
    AttributeListAllOfGroupLabelsFromJSON,
    AttributeListAllOfGroupLabelsFromJSONTyped,
    AttributeListAllOfGroupLabelsToJSON,
} from './AttributeListAllOfGroupLabels';
import type { AttributeListAllOfLabels } from './AttributeListAllOfLabels';
import {
    AttributeListAllOfLabelsFromJSON,
    AttributeListAllOfLabelsFromJSONTyped,
    AttributeListAllOfLabelsToJSON,
} from './AttributeListAllOfLabels';
import type { AttributeListAllOfTableConfiguration } from './AttributeListAllOfTableConfiguration';
import {
    AttributeListAllOfTableConfigurationFromJSON,
    AttributeListAllOfTableConfigurationFromJSONTyped,
    AttributeListAllOfTableConfigurationToJSON,
} from './AttributeListAllOfTableConfiguration';
import type { ProductListAllOfLinks } from './ProductListAllOfLinks';
import {
    ProductListAllOfLinksFromJSON,
    ProductListAllOfLinksFromJSONTyped,
    ProductListAllOfLinksToJSON,
} from './ProductListAllOfLinks';

/**
 * 
 * @export
 * @interface AttributeList
 */
export interface AttributeList {
    /**
     * 
     * @type {ProductListAllOfLinks}
     * @memberof AttributeList
     */
    links?: ProductListAllOfLinks;
    /**
     * Attribute code
     * @type {string}
     * @memberof AttributeList
     */
    code: string;
    /**
     * Attribute type. See <a href='/concepts/catalog-structure.html#attribute'>type</a> section for more details.
     * @type {string}
     * @memberof AttributeList
     */
    type: AttributeListTypeEnum;
    /**
     * 
     * @type {AttributeListAllOfLabels}
     * @memberof AttributeList
     */
    labels?: AttributeListAllOfLabels;
    /**
     * Attribute group
     * @type {string}
     * @memberof AttributeList
     */
    group: string;
    /**
     * 
     * @type {AttributeListAllOfGroupLabels}
     * @memberof AttributeList
     */
    groupLabels?: AttributeListAllOfGroupLabels;
    /**
     * Order of the attribute in its group
     * @type {number}
     * @memberof AttributeList
     */
    sortOrder?: number;
    /**
     * Whether the attribute is localizable, i.e. can have one value by locale
     * @type {boolean}
     * @memberof AttributeList
     */
    localizable?: boolean;
    /**
     * Whether the attribute is scopable, i.e. can have one value by channel
     * @type {boolean}
     * @memberof AttributeList
     */
    scopable?: boolean;
    /**
     * To make the attribute locale specfic, specify here for which locales it is specific
     * @type {Array<string>}
     * @memberof AttributeList
     */
    availableLocales?: Array<string>;
    /**
     * Whether two values for the attribute cannot be the same
     * @type {boolean}
     * @memberof AttributeList
     */
    unique?: boolean;
    /**
     * Whether the attribute can be used as a filter for the product grid in the PIM user interface
     * @type {boolean}
     * @memberof AttributeList
     */
    useableAsGridFilter?: boolean;
    /**
     * Number maximum of characters allowed for the value of the attribute when the attribute type is `pim_catalog_text`, `pim_catalog_textarea` or `pim_catalog_identifier`
     * @type {number}
     * @memberof AttributeList
     */
    maxCharacters?: number;
    /**
     * Validation rule type used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
     * @type {string}
     * @memberof AttributeList
     */
    validationRule?: string;
    /**
     * Regexp expression used to validate any attribute value when the attribute type is `pim_catalog_text` or `pim_catalog_identifier`
     * @type {string}
     * @memberof AttributeList
     */
    validationRegexp?: string;
    /**
     * Whether the WYSIWYG interface is shown when the attribute type is `pim_catalog_textarea`
     * @type {boolean}
     * @memberof AttributeList
     */
    wysiwygEnabled?: boolean;
    /**
     * Minimum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
     * @type {string}
     * @memberof AttributeList
     */
    numberMin?: string;
    /**
     * Maximum integer value allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
     * @type {string}
     * @memberof AttributeList
     */
    numberMax?: string;
    /**
     * Whether decimals are allowed when the attribute type is `pim_catalog_metric`, `pim_catalog_price` or `pim_catalog_number`
     * @type {boolean}
     * @memberof AttributeList
     */
    decimalsAllowed?: boolean;
    /**
     * Whether negative values are allowed when the attribute type is `pim_catalog_metric` or `pim_catalog_number`
     * @type {boolean}
     * @memberof AttributeList
     */
    negativeAllowed?: boolean;
    /**
     * Metric family when the attribute type is `pim_catalog_metric`
     * @type {string}
     * @memberof AttributeList
     */
    metricFamily?: string;
    /**
     * Default metric unit when the attribute type is `pim_catalog_metric`
     * @type {string}
     * @memberof AttributeList
     */
    defaultMetricUnit?: string;
    /**
     * Minimum date allowed when the attribute type is `pim_catalog_date`
     * @type {Date}
     * @memberof AttributeList
     */
    dateMin?: Date;
    /**
     * Maximum date allowed when the attribute type is `pim_catalog_date`
     * @type {Date}
     * @memberof AttributeList
     */
    dateMax?: Date;
    /**
     * Extensions allowed when the attribute type is `pim_catalog_file` or `pim_catalog_image`
     * @type {Array<string>}
     * @memberof AttributeList
     */
    allowedExtensions?: Array<string>;
    /**
     * Max file size in MB when the attribute type is `pim_catalog_file` or `pim_catalog_image`
     * @type {string}
     * @memberof AttributeList
     */
    maxFileSize?: string;
    /**
     * Reference entity code when the attribute type is `akeneo_reference_entity` or `akeneo_reference_entity_collection` OR Asset family code when the attribute type is `pim_catalog_asset_collection`
     * @type {string}
     * @memberof AttributeList
     */
    referenceDataName?: string;
    /**
     * Default value for a Yes/No attribute, applied when creating a new product or product model (only available since the 5.0)
     * @type {boolean}
     * @memberof AttributeList
     */
    defaultValue?: boolean;
    /**
     * Configuration of the Table attribute (columns)
     * @type {Array<AttributeListAllOfTableConfiguration>}
     * @memberof AttributeList
     */
    tableConfiguration?: Array<AttributeListAllOfTableConfiguration>;
}


/**
 * @export
 */
export const AttributeListTypeEnum = {
    PimCatalogIdentifier: 'pim_catalog_identifier',
    PimCatalogMetric: 'pim_catalog_metric',
    PimCatalogNumber: 'pim_catalog_number',
    PimCatalogReferenceDataMultiSelect: 'pim_catalog_reference_data_multi_select',
    PimCatalogReferenceDataSimpleSelect: 'pim_catalog_reference_data_simple_select',
    PimCatalogSimpleselect: 'pim_catalog_simpleselect',
    PimCatalogMultiselect: 'pim_catalog_multiselect',
    PimCatalogDate: 'pim_catalog_date',
    PimCatalogTextarea: 'pim_catalog_textarea',
    PimCatalogText: 'pim_catalog_text',
    PimCatalogFile: 'pim_catalog_file',
    PimCatalogImage: 'pim_catalog_image',
    PimCatalogPriceCollection: 'pim_catalog_price_collection',
    PimCatalogBoolean: 'pim_catalog_boolean',
    AkeneoReferenceEntity: 'akeneo_reference_entity',
    AkeneoReferenceEntityCollection: 'akeneo_reference_entity_collection',
    PimCatalogAssetCollection: 'pim_catalog_asset_collection'
} as const;
export type AttributeListTypeEnum = typeof AttributeListTypeEnum[keyof typeof AttributeListTypeEnum];


/**
 * Check if a given object implements the AttributeList interface.
 */
export function instanceOfAttributeList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "group" in value;

    return isInstance;
}

export function AttributeListFromJSON(json: any): AttributeList {
    return AttributeListFromJSONTyped(json, false);
}

export function AttributeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductListAllOfLinksFromJSON(json['_links']),
        'code': json['code'],
        'type': json['type'],
        'labels': !exists(json, 'labels') ? undefined : AttributeListAllOfLabelsFromJSON(json['labels']),
        'group': json['group'],
        'groupLabels': !exists(json, 'group_labels') ? undefined : AttributeListAllOfGroupLabelsFromJSON(json['group_labels']),
        'sortOrder': !exists(json, 'sort_order') ? undefined : json['sort_order'],
        'localizable': !exists(json, 'localizable') ? undefined : json['localizable'],
        'scopable': !exists(json, 'scopable') ? undefined : json['scopable'],
        'availableLocales': !exists(json, 'available_locales') ? undefined : json['available_locales'],
        'unique': !exists(json, 'unique') ? undefined : json['unique'],
        'useableAsGridFilter': !exists(json, 'useable_as_grid_filter') ? undefined : json['useable_as_grid_filter'],
        'maxCharacters': !exists(json, 'max_characters') ? undefined : json['max_characters'],
        'validationRule': !exists(json, 'validation_rule') ? undefined : json['validation_rule'],
        'validationRegexp': !exists(json, 'validation_regexp') ? undefined : json['validation_regexp'],
        'wysiwygEnabled': !exists(json, 'wysiwyg_enabled') ? undefined : json['wysiwyg_enabled'],
        'numberMin': !exists(json, 'number_min') ? undefined : json['number_min'],
        'numberMax': !exists(json, 'number_max') ? undefined : json['number_max'],
        'decimalsAllowed': !exists(json, 'decimals_allowed') ? undefined : json['decimals_allowed'],
        'negativeAllowed': !exists(json, 'negative_allowed') ? undefined : json['negative_allowed'],
        'metricFamily': !exists(json, 'metric_family') ? undefined : json['metric_family'],
        'defaultMetricUnit': !exists(json, 'default_metric_unit') ? undefined : json['default_metric_unit'],
        'dateMin': !exists(json, 'date_min') ? undefined : (new Date(json['date_min'])),
        'dateMax': !exists(json, 'date_max') ? undefined : (new Date(json['date_max'])),
        'allowedExtensions': !exists(json, 'allowed_extensions') ? undefined : json['allowed_extensions'],
        'maxFileSize': !exists(json, 'max_file_size') ? undefined : json['max_file_size'],
        'referenceDataName': !exists(json, 'reference_data_name') ? undefined : json['reference_data_name'],
        'defaultValue': !exists(json, 'default_value') ? undefined : json['default_value'],
        'tableConfiguration': !exists(json, 'table_configuration') ? undefined : ((json['table_configuration'] as Array<any>).map(AttributeListAllOfTableConfigurationFromJSON)),
    };
}

export function AttributeListToJSON(value?: AttributeList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductListAllOfLinksToJSON(value.links),
        'code': value.code,
        'type': value.type,
        'labels': AttributeListAllOfLabelsToJSON(value.labels),
        'group': value.group,
        'group_labels': AttributeListAllOfGroupLabelsToJSON(value.groupLabels),
        'sort_order': value.sortOrder,
        'localizable': value.localizable,
        'scopable': value.scopable,
        'available_locales': value.availableLocales,
        'unique': value.unique,
        'useable_as_grid_filter': value.useableAsGridFilter,
        'max_characters': value.maxCharacters,
        'validation_rule': value.validationRule,
        'validation_regexp': value.validationRegexp,
        'wysiwyg_enabled': value.wysiwygEnabled,
        'number_min': value.numberMin,
        'number_max': value.numberMax,
        'decimals_allowed': value.decimalsAllowed,
        'negative_allowed': value.negativeAllowed,
        'metric_family': value.metricFamily,
        'default_metric_unit': value.defaultMetricUnit,
        'date_min': value.dateMin === undefined ? undefined : (value.dateMin.toISOString()),
        'date_max': value.dateMax === undefined ? undefined : (value.dateMax.toISOString()),
        'allowed_extensions': value.allowedExtensions,
        'max_file_size': value.maxFileSize,
        'reference_data_name': value.referenceDataName,
        'default_value': value.defaultValue,
        'table_configuration': value.tableConfiguration === undefined ? undefined : ((value.tableConfiguration as Array<any>).map(AttributeListAllOfTableConfigurationToJSON)),
    };
}
