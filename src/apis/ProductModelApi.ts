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
  PatchProductModelsRequest,
  PatchProducts200Response,
  PostProductModelsRequest,
  ProductModels,
  ProductModelsEmbeddedItemsInnerAllOf,
} from '../models';
import {
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PatchProductModelsRequestFromJSON,
    PatchProductModelsRequestToJSON,
    PatchProducts200ResponseFromJSON,
    PatchProducts200ResponseToJSON,
    PostProductModelsRequestFromJSON,
    PostProductModelsRequestToJSON,
    ProductModelsFromJSON,
    ProductModelsToJSON,
    ProductModelsEmbeddedItemsInnerAllOfFromJSON,
    ProductModelsEmbeddedItemsInnerAllOfToJSON,
} from '../models';

export interface DeleteProductModelsCodeRequest {
    code: string;
}

export interface GetProductModelDraftCodeRequest {
    code: string;
}

export interface GetProductModelsRequest {
    search?: string;
    scope?: string;
    locales?: string;
    attributes?: string;
    paginationType?: GetProductModelsPaginationTypeEnum;
    page?: number;
    searchAfter?: string;
    limit?: number;
    withCount?: boolean;
    withQualityScores?: boolean;
}

export interface GetProductModelsCodeRequest {
    code: string;
    withQualityScores?: boolean;
}

export interface PatchProductModelsOperationRequest {
    body?: PatchProductModelsRequest;
}

export interface PatchProductModelsCodeRequest {
    code: string;
    body: PostProductModelsRequest;
}

export interface PostProductModelProposalRequest {
    code: string;
}

export interface PostProductModelsOperationRequest {
    body?: PostProductModelsRequest;
}

/**
 * 
 */
export class ProductModelApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to delete a given product model. All its children, product models and variant products, will be also deleted. In the Enterprise Edition, the permissions based on your connection user group are applied to the product model you try to delete.
     * Delete a product model
     */
    async deleteProductModelsCodeRaw(requestParameters: DeleteProductModelsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteProductModelsCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/product-models/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to delete a given product model. All its children, product models and variant products, will be also deleted. In the Enterprise Edition, the permissions based on your connection user group are applied to the product model you try to delete.
     * Delete a product model
     */
    async deleteProductModelsCode(requestParameters: DeleteProductModelsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductModelsCodeRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to get the information about a given product model draft.
     * Get a draft
     */
    async getProductModelDraftCodeRaw(requestParameters: GetProductModelDraftCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductModelsEmbeddedItemsInnerAllOf>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getProductModelDraftCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/product-models/{code}/draft`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductModelsEmbeddedItemsInnerAllOfFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given product model draft.
     * Get a draft
     */
    async getProductModelDraftCode(requestParameters: GetProductModelDraftCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductModelsEmbeddedItemsInnerAllOf> {
        const response = await this.getProductModelDraftCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get a list of product models. Product models are paginated. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.
     * Get list of product models
     */
    async getProductModelsRaw(requestParameters: GetProductModelsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductModels>> {
        const queryParameters: any = {};

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.scope !== undefined) {
            queryParameters['scope'] = requestParameters.scope;
        }

        if (requestParameters.locales !== undefined) {
            queryParameters['locales'] = requestParameters.locales;
        }

        if (requestParameters.attributes !== undefined) {
            queryParameters['attributes'] = requestParameters.attributes;
        }

        if (requestParameters.paginationType !== undefined) {
            queryParameters['pagination_type'] = requestParameters.paginationType;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.searchAfter !== undefined) {
            queryParameters['search_after'] = requestParameters.searchAfter;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.withCount !== undefined) {
            queryParameters['with_count'] = requestParameters.withCount;
        }

        if (requestParameters.withQualityScores !== undefined) {
            queryParameters['with_quality_scores'] = requestParameters.withQualityScores;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/product-models`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductModelsFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of product models. Product models are paginated. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.
     * Get list of product models
     */
    async getProductModels(requestParameters: GetProductModelsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductModels> {
        const response = await this.getProductModelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the information about a given product model. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product model you request.
     * Get a product model
     */
    async getProductModelsCodeRaw(requestParameters: GetProductModelsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductModelsEmbeddedItemsInnerAllOf>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getProductModelsCode.');
        }

        const queryParameters: any = {};

        if (requestParameters.withQualityScores !== undefined) {
            queryParameters['with_quality_scores'] = requestParameters.withQualityScores;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/product-models/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductModelsEmbeddedItemsInnerAllOfFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given product model. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product model you request.
     * Get a product model
     */
    async getProductModelsCode(requestParameters: GetProductModelsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductModelsEmbeddedItemsInnerAllOf> {
        const response = await this.getProductModelsCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update and/or create several product models at once. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product models exists for the given code, it creates it. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product models you try to update. It may result in the creation of drafts if you only have edit rights through the product model\'s categories.
     * Update/create several product models
     */
    async patchProductModelsRaw(requestParameters: PatchProductModelsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PatchProducts200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/product-models`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchProductModelsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchProducts200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to update and/or create several product models at once. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product models exists for the given code, it creates it. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product models you try to update. It may result in the creation of drafts if you only have edit rights through the product model\'s categories.
     * Update/create several product models
     */
    async patchProductModels(requestParameters: PatchProductModelsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchProducts200Response> {
        const response = await this.patchProductModelsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a given product model. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product model exists for the given code, it creates it. In the Enterprise Edition PIM since the 2.3, permissions based on your user groups are applied to the product model you try to update. It may result in the creation of a draft if you only have edit rights through the product model\'s categories.
     * Update/create a product model
     */
    async patchProductModelsCodeRaw(requestParameters: PatchProductModelsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling patchProductModelsCode.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchProductModelsCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/product-models/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PostProductModelsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given product model. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product model exists for the given code, it creates it. In the Enterprise Edition PIM since the 2.3, permissions based on your user groups are applied to the product model you try to update. It may result in the creation of a draft if you only have edit rights through the product model\'s categories.
     * Update/create a product model
     */
    async patchProductModelsCode(requestParameters: PatchProductModelsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchProductModelsCodeRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to submit a product model draft for approval.
     * Submit a draft for approval
     */
    async postProductModelProposalRaw(requestParameters: PostProductModelProposalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling postProductModelProposal.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/product-models/{code}/proposal`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to submit a product model draft for approval.
     * Submit a draft for approval
     */
    async postProductModelProposal(requestParameters: PostProductModelProposalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postProductModelProposalRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to create a new product model. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product model you try to create.
     * Create a new product model
     */
    async postProductModelsRaw(requestParameters: PostProductModelsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/product-models`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostProductModelsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to create a new product model. In the Enterprise Edition, since the v2.3, permissions based on your user groups are applied to the product model you try to create.
     * Create a new product model
     */
    async postProductModels(requestParameters: PostProductModelsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postProductModelsRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GetProductModelsPaginationTypeEnum = {
    Page: 'page',
    SearchAfter: 'search_after'
} as const;
export type GetProductModelsPaginationTypeEnum = typeof GetProductModelsPaginationTypeEnum[keyof typeof GetProductModelsPaginationTypeEnum];
