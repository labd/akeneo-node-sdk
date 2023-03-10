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
import type { AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParameters } from './AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParameters';
import {
    AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParametersFromJSON,
    AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParametersFromJSONTyped,
    AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParametersToJSON,
} from './AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParameters';

/**
 * The transformations that should be applied to your source file to generate the target file. More details <a href='/concepts/asset-manager.html#transformation-operations'>here</a>.
 * @export
 * @interface AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperations
 */
export interface AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperations {
    /**
     * 
     * @type {string}
     * @memberof AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperations
     */
    type?: string;
    /**
     * 
     * @type {AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParameters}
     * @memberof AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperations
     */
    parameters?: AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParameters;
}

/**
 * Check if a given object implements the AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperations interface.
 */
export function instanceOfAssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperations(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsFromJSON(json: any): AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperations {
    return AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsFromJSONTyped(json, false);
}

export function AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'parameters': !exists(json, 'parameters') ? undefined : AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParametersFromJSON(json['parameters']),
    };
}

export function AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsToJSON(value?: AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'parameters': AssetFamiliesEmbeddedItemsInnerAllOfTransformationsInnerOperationsParametersToJSON(value.parameters),
    };
}

