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
  PatchProducts200Response,
  PatchProductsRequest,
  PostProductsRequest,
  Products,
  ProductsEmbeddedItemsInnerAllOf1,
} from '../models';
import {
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PatchProducts200ResponseFromJSON,
    PatchProducts200ResponseToJSON,
    PatchProductsRequestFromJSON,
    PatchProductsRequestToJSON,
    PostProductsRequestFromJSON,
    PostProductsRequestToJSON,
    ProductsFromJSON,
    ProductsToJSON,
    ProductsEmbeddedItemsInnerAllOf1FromJSON,
    ProductsEmbeddedItemsInnerAllOf1ToJSON,
} from '../models';

export interface DeleteProductsCodeRequest {
    code: string;
}

export interface GetDraftCodeRequest {
    code: string;
}

export interface GetProductsRequest {
    search?: string;
    scope?: string;
    locales?: string;
    attributes?: string;
    paginationType?: GetProductsPaginationTypeEnum;
    page?: number;
    searchAfter?: string;
    limit?: number;
    withCount?: boolean;
    withAttributeOptions?: boolean;
    withQualityScores?: boolean;
    withCompletenesses?: boolean;
}

export interface GetProductsCodeRequest {
    code: string;
    withAttributeOptions?: boolean;
    withQualityScores?: boolean;
    withCompletenesses?: boolean;
}

export interface PatchProductsOperationRequest {
    body?: PatchProductsRequest;
}

export interface PatchProductsCodeRequest {
    code: string;
    body: PostProductsRequest;
}

export interface PostProductsOperationRequest {
    body?: PostProductsRequest;
}

export interface PostProposalRequest {
    code: string;
}

/**
 * 
 */
export class ProductIdentifierApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to delete a given product. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the product you try to delete.
     * Delete a product
     */
    async deleteProductsCodeRaw(requestParameters: DeleteProductsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling deleteProductsCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/products/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to delete a given product. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the product you try to delete.
     * Delete a product
     */
    async deleteProductsCode(requestParameters: DeleteProductsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProductsCodeRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to get the information about a given draft.
     * Get a draft
     */
    async getDraftCodeRaw(requestParameters: GetDraftCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductsEmbeddedItemsInnerAllOf1>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getDraftCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/products/{code}/draft`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductsEmbeddedItemsInnerAllOf1FromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given draft.
     * Get a draft
     */
    async getDraftCode(requestParameters: GetDraftCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductsEmbeddedItemsInnerAllOf1> {
        const response = await this.getDraftCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get a list of products. Products are paginated and they can be filtered. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.
     * Get list of products
     */
    async getProductsRaw(requestParameters: GetProductsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Products>> {
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

        if (requestParameters.withAttributeOptions !== undefined) {
            queryParameters['with_attribute_options'] = requestParameters.withAttributeOptions;
        }

        if (requestParameters.withQualityScores !== undefined) {
            queryParameters['with_quality_scores'] = requestParameters.withQualityScores;
        }

        if (requestParameters.withCompletenesses !== undefined) {
            queryParameters['with_completenesses'] = requestParameters.withCompletenesses;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductsFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get a list of products. Products are paginated and they can be filtered. In the Enterprise Edition, since the 2.0, permissions based on your user groups are applied to the set of products you request.
     * Get list of products
     */
    async getProducts(requestParameters: GetProductsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Products> {
        const response = await this.getProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to get the information about a given product. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product you request.
     * Get a product
     */
    async getProductsCodeRaw(requestParameters: GetProductsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProductsEmbeddedItemsInnerAllOf1>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getProductsCode.');
        }

        const queryParameters: any = {};

        if (requestParameters.withAttributeOptions !== undefined) {
            queryParameters['with_attribute_options'] = requestParameters.withAttributeOptions;
        }

        if (requestParameters.withQualityScores !== undefined) {
            queryParameters['with_quality_scores'] = requestParameters.withQualityScores;
        }

        if (requestParameters.withCompletenesses !== undefined) {
            queryParameters['with_completenesses'] = requestParameters.withCompletenesses;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/products/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductsEmbeddedItemsInnerAllOf1FromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to get the information about a given product. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product you request.
     * Get a product
     */
    async getProductsCode(requestParameters: GetProductsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProductsEmbeddedItemsInnerAllOf1> {
        const response = await this.getProductsCodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update and/or create several products at once. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product exists for the given identifier, it creates it. In the Enterprise Edition, since the v2.0, permissions based on your user groups are applied to the products you try to update. It may result in the creation of drafts if you only have edit rights through the product\'s categories.
     * Update/create several products
     */
    async patchProductsRaw(requestParameters: PatchProductsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PatchProducts200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/products`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchProductsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PatchProducts200ResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint allows you to update and/or create several products at once. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product exists for the given identifier, it creates it. In the Enterprise Edition, since the v2.0, permissions based on your user groups are applied to the products you try to update. It may result in the creation of drafts if you only have edit rights through the product\'s categories.
     * Update/create several products
     */
    async patchProducts(requestParameters: PatchProductsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PatchProducts200Response> {
        const response = await this.patchProductsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint allows you to update a given product. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product exists for the given identifier, it creates it. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product you try to update. It may result in the creation of a draft if you only have edit rights through the product\'s categories.
     * Update/create a product
     */
    async patchProductsCodeRaw(requestParameters: PatchProductsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling patchProductsCode.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling patchProductsCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/products/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PostProductsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to update a given product. Learn more about <a href=\"/documentation/update.html#update-behavior\">Update behavior</a>. Note that if no product exists for the given identifier, it creates it. In the Entreprise Edition, since the v2.0, permissions based on your user groups are applied to the product you try to update. It may result in the creation of a draft if you only have edit rights through the product\'s categories.
     * Update/create a product
     */
    async patchProductsCode(requestParameters: PatchProductsCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.patchProductsCodeRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to create a new product. In the Enterprise Edition, since the v2.0, permissions based on your user groups are applied to the product you try to create.
     * Create a new product
     */
    async postProductsRaw(requestParameters: PostProductsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/rest/v1/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostProductsRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to create a new product. In the Enterprise Edition, since the v2.0, permissions based on your user groups are applied to the product you try to create.
     * Create a new product
     */
    async postProducts(requestParameters: PostProductsOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postProductsRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to submit a draft for approval.
     * Submit a draft for approval
     */
    async postProposalRaw(requestParameters: PostProposalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling postProposal.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/products/{code}/proposal`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to submit a draft for approval.
     * Submit a draft for approval
     */
    async postProposal(requestParameters: PostProposalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postProposalRaw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const GetProductsPaginationTypeEnum = {
    Page: 'page',
    SearchAfter: 'search_after'
} as const;
export type GetProductsPaginationTypeEnum = typeof GetProductsPaginationTypeEnum[keyof typeof GetProductsPaginationTypeEnum];
