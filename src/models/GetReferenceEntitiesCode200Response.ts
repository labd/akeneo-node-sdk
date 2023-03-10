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
import type { GetReferenceEntitiesCode200ResponseLinks } from './GetReferenceEntitiesCode200ResponseLinks';
import {
    GetReferenceEntitiesCode200ResponseLinksFromJSON,
    GetReferenceEntitiesCode200ResponseLinksFromJSONTyped,
    GetReferenceEntitiesCode200ResponseLinksToJSON,
} from './GetReferenceEntitiesCode200ResponseLinks';
import type { ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels } from './ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels';
import {
    ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsFromJSON,
    ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsFromJSONTyped,
    ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsToJSON,
} from './ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels';

/**
 * 
 * @export
 * @interface GetReferenceEntitiesCode200Response
 */
export interface GetReferenceEntitiesCode200Response {
    /**
     * 
     * @type {GetReferenceEntitiesCode200ResponseLinks}
     * @memberof GetReferenceEntitiesCode200Response
     */
    links?: GetReferenceEntitiesCode200ResponseLinks;
    /**
     * Reference entity code
     * @type {string}
     * @memberof GetReferenceEntitiesCode200Response
     */
    code: string;
    /**
     * Code of the reference entity image
     * @type {string}
     * @memberof GetReferenceEntitiesCode200Response
     */
    image?: string;
    /**
     * 
     * @type {ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels}
     * @memberof GetReferenceEntitiesCode200Response
     */
    labels?: ReferenceEntitiesEmbeddedItemsInnerAllOf1Labels;
}

/**
 * Check if a given object implements the GetReferenceEntitiesCode200Response interface.
 */
export function instanceOfGetReferenceEntitiesCode200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function GetReferenceEntitiesCode200ResponseFromJSON(json: any): GetReferenceEntitiesCode200Response {
    return GetReferenceEntitiesCode200ResponseFromJSONTyped(json, false);
}

export function GetReferenceEntitiesCode200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetReferenceEntitiesCode200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, '_links') ? undefined : GetReferenceEntitiesCode200ResponseLinksFromJSON(json['_links']),
        'code': json['code'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'labels': !exists(json, 'labels') ? undefined : ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsFromJSON(json['labels']),
    };
}

export function GetReferenceEntitiesCode200ResponseToJSON(value?: GetReferenceEntitiesCode200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_links': GetReferenceEntitiesCode200ResponseLinksToJSON(value.links),
        'code': value.code,
        'image': value.image,
        'labels': ReferenceEntitiesEmbeddedItemsInnerAllOf1LabelsToJSON(value.labels),
    };
}

