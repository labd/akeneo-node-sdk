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
  AssociationTypes,
  AssociationTypesEmbeddedItemsInnerAllOf,
  GetProducts401Response,
  PatchProducts200Response,
  SeveralAssociationTypesPatchRequest,
} from '../models';
import {
    AssociationTypesFromJSON,
    AssociationTypesToJSON,
    AssociationTypesEmbeddedItemsInnerAllOfFromJSON,
    AssociationTypesEmbeddedItemsInnerAllOfToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PatchProducts200ResponseFromJSON,
    PatchProducts200ResponseToJSON,
    SeveralAssociationTypesPatchRequestFromJSON,
    SeveralAssociationTypesPatchRequestToJSON,
} from '../models';

export interface AssociationTypesGetRequest {
    code: string;
}

export interface AssociationTypesGetListRequest {
    page?: number;
    limit?: number;
    withCount?: boolean;
}

export interface AssociationTypesPatchRequest {
    code: string;
    body: AssociationTypesEmbeddedItemsInnerAllOf;
}

export interface AssociationTypesPostRequest {
    body?: AssociationTypesEmbeddedItemsInnerAllOf;
}

export interface SeveralAssociationTypesPatchOperationRequest {
    body?: SeveralAssociationTypesPatchRequest;
}

/**
 * 
 */
export class AssociationTypeApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to get the information about a given association type.
     * Get an association type
     */
    async associationTypesGetRaw(requestParameters: AssociationTypesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AssociationTypesEmbeddedItemsInnerAllOf>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling associationTypesGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/association-types/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssociationTypesEmbeddedItemsInnerAllOfFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given association type.
     * Get an association type
     */
    async associationTypesGet(requestParameters: AssociationTypesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AssociationTypesEmbeddedItemsInnerAllOf> {
        const response = await this.associationTypesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get a list of association types. Association types are paginated and sorted by code.
     * Get a list of association types
     */
    async associationTypesGetListRaw(requestParameters: AssociationTypesGetListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AssociationTypes>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.withCount !== undefined) {
            queryParameters['with_count'] = requestParameters.withCount;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/association-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AssociationTypesFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of association types. Association types are paginated and sorted by code.
     * Get a list of association types
     */
    async associationTypesGetList(requestParameters: AssociationTypesGetListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AssociationTypes> {
        const response = await this.associationTypesGetListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a given association type. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no association type exists for the given code, it creates it.
     * Update/create an association type
     */
    async associationTypesPatchRaw(requestParameters: AssociationTypesPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling associationTypesPatch.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling associationTypesPatch.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/association-types/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AssociationTypesEmbeddedItemsInnerAllOfToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given association type. Know more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no association type exists for the given code, it creates it.
     * Update/create an association type
     */
    async associationTypesPatch(requestParameters: AssociationTypesPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.associationTypesPatchRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to create a new association type.
     * Create a new association type
     */
    async associationTypesPostRaw(requestParameters: AssociationTypesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/association-types`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AssociationTypesEmbeddedItemsInnerAllOfToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to create a new association type.
     * Create a new association type
     */
    async associationTypesPost(requestParameters: AssociationTypesPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.associationTypesPostRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to update and/or create several association types at once.
     * Update/create several association types
     */
    async severalAssociationTypesPatchRaw(requestParameters: SeveralAssociationTypesPatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PatchProducts200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/association-types`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SeveralAssociationTypesPatchRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchProducts200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to update and/or create several association types at once.
     * Update/create several association types
     */
    async severalAssociationTypesPatch(requestParameters: SeveralAssociationTypesPatchOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchProducts200Response> {
        const response = await this.severalAssociationTypesPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
