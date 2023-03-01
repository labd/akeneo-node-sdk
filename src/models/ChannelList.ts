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
import type { ChannelListAllOfConversionUnits } from './ChannelListAllOfConversionUnits';
import {
    ChannelListAllOfConversionUnitsFromJSON,
    ChannelListAllOfConversionUnitsFromJSONTyped,
    ChannelListAllOfConversionUnitsToJSON,
} from './ChannelListAllOfConversionUnits';
import type { ChannelListAllOfLabels } from './ChannelListAllOfLabels';
import {
    ChannelListAllOfLabelsFromJSON,
    ChannelListAllOfLabelsFromJSONTyped,
    ChannelListAllOfLabelsToJSON,
} from './ChannelListAllOfLabels';
import type { ProductListAllOfLinks } from './ProductListAllOfLinks';
import {
    ProductListAllOfLinksFromJSON,
    ProductListAllOfLinksFromJSONTyped,
    ProductListAllOfLinksToJSON,
} from './ProductListAllOfLinks';

/**
 * 
 * @export
 * @interface ChannelList
 */
export interface ChannelList {
    /**
     * 
     * @type {ProductListAllOfLinks}
     * @memberof ChannelList
     */
    links?: ProductListAllOfLinks;
    /**
     * Channel code
     * @type {string}
     * @memberof ChannelList
     */
    code: string;
    /**
     * Codes of activated locales for the channel
     * @type {Array<string>}
     * @memberof ChannelList
     */
    locales: Array<string>;
    /**
     * Codes of activated currencies for the channel
     * @type {Array<string>}
     * @memberof ChannelList
     */
    currencies: Array<string>;
    /**
     * Code of the category tree linked to the channel
     * @type {string}
     * @memberof ChannelList
     */
    categoryTree: string;
    /**
     * 
     * @type {ChannelListAllOfConversionUnits}
     * @memberof ChannelList
     */
    conversionUnits?: ChannelListAllOfConversionUnits;
    /**
     * 
     * @type {ChannelListAllOfLabels}
     * @memberof ChannelList
     */
    labels?: ChannelListAllOfLabels;
}

/**
 * Check if a given object implements the ChannelList interface.
 */
export function instanceOfChannelList(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "locales" in value;
    isInstance = isInstance && "currencies" in value;
    isInstance = isInstance && "categoryTree" in value;

    return isInstance;
}

export function ChannelListFromJSON(json: any): ChannelList {
    return ChannelListFromJSONTyped(json, false);
}

export function ChannelListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : ProductListAllOfLinksFromJSON(json['_links']),
        'code': json['code'],
        'locales': json['locales'],
        'currencies': json['currencies'],
        'categoryTree': json['category_tree'],
        'conversionUnits': !exists(json, 'conversion_units') ? undefined : ChannelListAllOfConversionUnitsFromJSON(json['conversion_units']),
        'labels': !exists(json, 'labels') ? undefined : ChannelListAllOfLabelsFromJSON(json['labels']),
    };
}

export function ChannelListToJSON(value?: ChannelList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': ProductListAllOfLinksToJSON(value.links),
        'code': value.code,
        'locales': value.locales,
        'currencies': value.currencies,
        'category_tree': value.categoryTree,
        'conversion_units': ChannelListAllOfConversionUnitsToJSON(value.conversionUnits),
        'labels': ChannelListAllOfLabelsToJSON(value.labels),
    };
}
