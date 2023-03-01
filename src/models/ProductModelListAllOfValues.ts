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
import type { ProductModelListAllOfValuesAttributeCode } from './ProductModelListAllOfValuesAttributeCode';
import {
    ProductModelListAllOfValuesAttributeCodeFromJSON,
    ProductModelListAllOfValuesAttributeCodeFromJSONTyped,
    ProductModelListAllOfValuesAttributeCodeToJSON,
} from './ProductModelListAllOfValuesAttributeCode';

/**
 * Product model attributes values, see <a href='/concepts/products.html#focus-on-the-product-values'>Product values</a> section for more details
 * @export
 * @interface ProductModelListAllOfValues
 */
export interface ProductModelListAllOfValues {
    /**
     * 
     * @type {Array<ProductModelListAllOfValuesAttributeCode>}
     * @memberof ProductModelListAllOfValues
     */
    attributeCode?: Array<ProductModelListAllOfValuesAttributeCode>;
}

/**
 * Check if a given object implements the ProductModelListAllOfValues interface.
 */
export function instanceOfProductModelListAllOfValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelListAllOfValuesFromJSON(json: any): ProductModelListAllOfValues {
    return ProductModelListAllOfValuesFromJSONTyped(json, false);
}

export function ProductModelListAllOfValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelListAllOfValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributeCode': !exists(json, 'attributeCode') ? undefined : ((json['attributeCode'] as Array<any>).map(ProductModelListAllOfValuesAttributeCodeFromJSON)),
    };
}

export function ProductModelListAllOfValuesToJSON(value?: ProductModelListAllOfValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributeCode': value.attributeCode === undefined ? undefined : ((value.attributeCode as Array<any>).map(ProductModelListAllOfValuesAttributeCodeToJSON)),
    };
}
