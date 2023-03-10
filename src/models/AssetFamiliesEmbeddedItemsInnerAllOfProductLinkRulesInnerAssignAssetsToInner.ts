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
 * @interface AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner
 */
export interface AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner {
    /**
     * 
     * @type {string}
     * @memberof AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner
     */
    attribute: string;
    /**
     * 
     * @type {string}
     * @memberof AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner
     */
    locale?: string;
    /**
     * 
     * @type {string}
     * @memberof AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner
     */
    channel?: string;
    /**
     * 
     * @type {string}
     * @memberof AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner
     */
    mode: string;
}

/**
 * Check if a given object implements the AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner interface.
 */
export function instanceOfAssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attribute" in value;
    isInstance = isInstance && "mode" in value;

    return isInstance;
}

export function AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInnerFromJSON(json: any): AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner {
    return AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInnerFromJSONTyped(json, false);
}

export function AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attribute': json['attribute'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'mode': json['mode'],
    };
}

export function AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInnerToJSON(value?: AssetFamiliesEmbeddedItemsInnerAllOfProductLinkRulesInnerAssignAssetsToInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attribute': value.attribute,
        'locale': value.locale,
        'channel': value.channel,
        'mode': value.mode,
    };
}

