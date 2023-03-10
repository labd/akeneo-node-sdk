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
  PostReferenceEntityMediaFilesRequest,
} from '../models';
import {
    GetProducts401ResponseFromJSON,
    GetProducts401ResponseToJSON,
    PostReferenceEntityMediaFilesRequestFromJSON,
    PostReferenceEntityMediaFilesRequestToJSON,
} from '../models';

export interface GetAssetMediaFilesCodeRequest {
    code: string;
}

export interface PostAssetMediaFilesRequest {
    contentType: string;
    body?: PostReferenceEntityMediaFilesRequest;
}

/**
 * 
 */
export class AssetMediaFileApi extends runtime.BaseAPI {

    /**
     * This endpoint allows you to download a given media file that is associated with an asset.
     * Download the media file associated to an asset
     */
    async getAssetMediaFilesCodeRaw(requestParameters: GetAssetMediaFilesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling getAssetMediaFilesCode.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/rest/v1/asset-media-files/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to download a given media file that is associated with an asset.
     * Download the media file associated to an asset
     */
    async getAssetMediaFilesCode(requestParameters: GetAssetMediaFilesCodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getAssetMediaFilesCodeRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoint allows you to create a new media file and associate it to a media file attribute value of an asset.
     * Create a new media file for an asset
     */
    async postAssetMediaFilesRaw(requestParameters: PostAssetMediaFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.contentType === null || requestParameters.contentType === undefined) {
            throw new runtime.RequiredError('contentType','Required parameter requestParameters.contentType was null or undefined when calling postAssetMediaFiles.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.contentType !== undefined && requestParameters.contentType !== null) {
            headerParameters['Content-Type'] = String(requestParameters.contentType);
        }

        const response = await this.request({
            path: `/api/rest/v1/asset-media-files`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostReferenceEntityMediaFilesRequestToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint allows you to create a new media file and associate it to a media file attribute value of an asset.
     * Create a new media file for an asset
     */
    async postAssetMediaFiles(requestParameters: PostAssetMediaFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postAssetMediaFilesRaw(requestParameters, initOverrides);
    }

}
