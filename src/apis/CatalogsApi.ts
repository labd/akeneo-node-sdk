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
  Catalogs,
  GetProducts401Response,
  PostAppCatalog201Response,
  PostAppCatalogRequest,
} from '../models';
import {
    CatalogsFromJSON,
    CatalogsToJSON,
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PostAppCatalog201ResponseFromJSON,
    PostAppCatalog201ResponseToJSON,
    PostAppCatalogRequestFromJSON,
    PostAppCatalogRequestToJSON,
} from '../models';

export interface DeleteAppCatalogRequest {
    id: string;
}

export interface GetAppCatalogRequest {
    id: string;
}

export interface GetAppCatalogsRequest {
    page?: number;
    limit?: number;
}

export interface PatchAppCatalogRequest {
    id: string;
    body?: PostAppCatalogRequest;
}

export interface PostAppCatalogOperationRequest {
    body?: PostAppCatalogRequest;
}

/**
 * 
 */
export class CatalogsApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to delete a catalog.
     * Delete a catalog
     */
    async deleteAppCatalogRaw(requestParameters: DeleteAppCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteAppCatalog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/catalogs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to delete a catalog.
     * Delete a catalog
     */
    async deleteAppCatalog(requestParameters: DeleteAppCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAppCatalogRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to get the information about a catalog.
     * Get a catalog
     */
    async getAppCatalogRaw(requestParameters: GetAppCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostAppCatalog201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getAppCatalog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/catalogs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostAppCatalog201ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a catalog.
     * Get a catalog
     */
    async getAppCatalog(requestParameters: GetAppCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostAppCatalog201Response> {
        const response = await this.getAppCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the list of catalogs you owned.
     * Get the list of owned catalogs
     */
    async getAppCatalogsRaw(requestParameters: GetAppCatalogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Catalogs>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/catalogs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CatalogsFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the list of catalogs you owned.
     * Get the list of owned catalogs
     */
    async getAppCatalogs(requestParameters: GetAppCatalogsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Catalogs> {
        const response = await this.getAppCatalogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a catalog.
     * Update a catalog
     */
    async patchAppCatalogRaw(requestParameters: PatchAppCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostAppCatalog201Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling patchAppCatalog.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/catalogs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PostAppCatalogRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostAppCatalog201ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to update a catalog.
     * Update a catalog
     */
    async patchAppCatalog(requestParameters: PatchAppCatalogRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostAppCatalog201Response> {
        const response = await this.patchAppCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to create a new catalog.
     * Create a new catalog
     */
    async postAppCatalogRaw(requestParameters: PostAppCatalogOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostAppCatalog201Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/catalogs`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostAppCatalogRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostAppCatalog201ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to create a new catalog.
     * Create a new catalog
     */
    async postAppCatalog(requestParameters: PostAppCatalogOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostAppCatalog201Response> {
        const response = await this.postAppCatalogRaw(requestParameters, initOverrides);
        return await response.value();
    }

}