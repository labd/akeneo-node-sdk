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
import type { PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner } from './PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner';
import {
    PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerFromJSON,
    PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerFromJSONTyped,
    PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerToJSON,
} from './PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner';
import type { PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInner } from './PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInner';
import {
    PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerFromJSON,
    PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerFromJSONTyped,
    PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerToJSON,
} from './PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInner';

/**
 * 
 * @export
 * @interface PatchPamAssetsRequest
 */
export interface PatchPamAssetsRequest {
    /**
     * PAM asset code
     * @type {string}
     * @memberof PatchPamAssetsRequest
     */
    code: string;
    /**
     * Codes of the PAM asset categories in which the asset is classified
     * @type {Array<string>}
     * @memberof PatchPamAssetsRequest
     */
    categories?: Array<string>;
    /**
     * Description of the PAM asset
     * @type {string}
     * @memberof PatchPamAssetsRequest
     */
    description?: string;
    /**
     * Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale
     * @type {boolean}
     * @memberof PatchPamAssetsRequest
     */
    localizable?: boolean;
    /**
     * Tags of the PAM asset
     * @type {Array<string>}
     * @memberof PatchPamAssetsRequest
     */
    tags?: Array<string>;
    /**
     * Date on which the PAM asset expire
     * @type {string}
     * @memberof PatchPamAssetsRequest
     */
    endOfUse?: string;
    /**
     * Variations of the PAM asset
     * @type {Array<PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInner>}
     * @memberof PatchPamAssetsRequest
     */
    variationFiles?: Array<PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInner>;
    /**
     * Reference files of the PAM asset
     * @type {Array<PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner>}
     * @memberof PatchPamAssetsRequest
     */
    referenceFiles?: Array<PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInner>;
}

/**
 * Check if a given object implements the PatchPamAssetsRequest interface.
 */
export function instanceOfPatchPamAssetsRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function PatchPamAssetsRequestFromJSON(json: any): PatchPamAssetsRequest {
    return PatchPamAssetsRequestFromJSONTyped(json, false);
}

export function PatchPamAssetsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchPamAssetsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'categories': !exists(json, 'categories') ? undefined : json['categories'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'localizable': !exists(json, 'localizable') ? undefined : json['localizable'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'endOfUse': !exists(json, 'end_of_use') ? undefined : json['end_of_use'],
        'variationFiles': !exists(json, 'variation_files') ? undefined : ((json['variation_files'] as Array<any>).map(PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerFromJSON)),
        'referenceFiles': !exists(json, 'reference_files') ? undefined : ((json['reference_files'] as Array<any>).map(PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerFromJSON)),
    };
}

export function PatchPamAssetsRequestToJSON(value?: PatchPamAssetsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'categories': value.categories,
        'description': value.description,
        'localizable': value.localizable,
        'tags': value.tags,
        'end_of_use': value.endOfUse,
        'variation_files': value.variationFiles === undefined ? undefined : ((value.variationFiles as Array<any>).map(PAMAssetsEmbeddedItemsInnerAllOfVariationFilesInnerToJSON)),
        'reference_files': value.referenceFiles === undefined ? undefined : ((value.referenceFiles as Array<any>).map(PAMAssetsEmbeddedItemsInnerAllOfReferenceFilesInnerToJSON)),
    };
}

