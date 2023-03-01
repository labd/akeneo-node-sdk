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


import * as runtime from '../runtime';
import type {
  GetProducts401Response,
  GetReferenceEntitiesCodeAttributes200ResponseInner,
  PatchReferenceEntityAttributesCodeRequest,
} from '../models';
import {
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    GetReferenceEntitiesCodeAttributes200ResponseInnerFromJSON,
    GetReferenceEntitiesCodeAttributes200ResponseInnerToJSON,
    PatchReferenceEntityAttributesCodeRequestFromJSON,
    PatchReferenceEntityAttributesCodeRequestToJSON,
} from '../models';

export interface GetReferenceEntitiesCodeAttributesRequest {
    referenceEntityCode: string;
}

export interface GetReferenceEntityAttributesCodeRequest {
    referenceEntityCode: string;
    code: string;
}

export interface PatchReferenceEntityAttributesCodeOperationRequest {
    referenceEntityCode: string;
    code: string;
    body: PatchReferenceEntityAttributesCodeRequest;
}

/**
 * 
 */
export class ReferenceEntityAttributeApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get the list of attributes of a given reference entity.
     * Get the list of attributes of a given reference entity
     */
    async getReferenceEntitiesCodeAttributesRaw(requestParameters: GetReferenceEntitiesCodeAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetReferenceEntitiesCodeAttributes200ResponseInner>>> {
        if (requestParameters.referenceEntityCode === null || requestParameters.referenceEntityCode === undefined) {
            throw new runtime.RequiredError('referenceEntityCode','Required parameter requestParameters.referenceEntityCode was null or undefined when calling getReferenceEntitiesCodeAttributes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/reference-entities/{reference_entity_code}/attributes`.replace(`{${"reference_entity_code"}}`, encodeURIComponent(String(requestParameters.referenceEntityCode))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetReferenceEntitiesCodeAttributes200ResponseInnerFromJSON));
    }

    /**
     * This endpoint allows you to get the list of attributes of a given reference entity.
     * Get the list of attributes of a given reference entity
     */
    async getReferenceEntitiesCodeAttributes(requestParameters: GetReferenceEntitiesCodeAttributesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetReferenceEntitiesCodeAttributes200ResponseInner>> {
        const response = await this.getReferenceEntitiesCodeAttributesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the information about a given attribute for a given reference entity.
     * Get an attribute of a given reference entity
     */
    async getReferenceEntityAttributesCodeRaw(requestParameters: GetReferenceEntityAttributesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetReferenceEntitiesCodeAttributes200ResponseInner>> {
        if (requestParameters.referenceEntityCode === null || requestParameters.referenceEntityCode === undefined) {
            throw new runtime.RequiredError('referenceEntityCode','Required parameter requestParameters.referenceEntityCode was null or undefined when calling getReferenceEntityAttributesCode.');
        }

        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getReferenceEntityAttributesCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/reference-entities/{reference_entity_code}/attributes/{code}`.replace(`{${"reference_entity_code"}}`, encodeURIComponent(String(requestParameters.referenceEntityCode))).replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetReferenceEntitiesCodeAttributes200ResponseInnerFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given attribute for a given reference entity.
     * Get an attribute of a given reference entity
     */
    async getReferenceEntityAttributesCode(requestParameters: GetReferenceEntityAttributesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetReferenceEntitiesCodeAttributes200ResponseInner> {
        const response = await this.getReferenceEntityAttributesCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a given attribute for a given renference entity. Note that if the attribute does not already exist for the given reference entity, it creates it.
     * Update/create an attribute of a given reference entity
     */
    async patchReferenceEntityAttributesCodeRaw(requestParameters: PatchReferenceEntityAttributesCodeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.referenceEntityCode === null || requestParameters.referenceEntityCode === undefined) {
            throw new runtime.RequiredError('referenceEntityCode','Required parameter requestParameters.referenceEntityCode was null or undefined when calling patchReferenceEntityAttributesCode.');
        }

        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling patchReferenceEntityAttributesCode.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchReferenceEntityAttributesCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/reference-entities/{reference_entity_code}/attributes/{code}`.replace(`{${"reference_entity_code"}}`, encodeURIComponent(String(requestParameters.referenceEntityCode))).replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchReferenceEntityAttributesCodeRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given attribute for a given renference entity. Note that if the attribute does not already exist for the given reference entity, it creates it.
     * Update/create an attribute of a given reference entity
     */
    async patchReferenceEntityAttributesCode(requestParameters: PatchReferenceEntityAttributesCodeOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchReferenceEntityAttributesCodeRaw(requestParameters, initOverrides);
    }

}