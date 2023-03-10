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
 * @interface AppCatalogListAllOf
 */
export interface AppCatalogListAllOf {
    /**
     * Catalog id
     * @type {string}
     * @memberof AppCatalogListAllOf
     */
    id?: string;
    /**
     * Catalog name
     * @type {string}
     * @memberof AppCatalogListAllOf
     */
    name?: string;
    /**
     * Whether the catalog is enabled or not
     * @type {boolean}
     * @memberof AppCatalogListAllOf
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the AppCatalogListAllOf interface.
 */
export function instanceOfAppCatalogListAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppCatalogListAllOfFromJSON(json: any): AppCatalogListAllOf {
    return AppCatalogListAllOfFromJSONTyped(json, false);
}

export function AppCatalogListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppCatalogListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function AppCatalogListAllOfToJSON(value?: AppCatalogListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'enabled': value.enabled,
    };
}

