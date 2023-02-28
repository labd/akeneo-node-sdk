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

import * as runtime from "../runtime";
import type {
  GetMediaFilesCode200Response,
  GetProducts401Response,
  MediaFiles,
  PostMediaFilesRequest,
} from "../models";
import {
  GetMediaFilesCode200ResponseFromJSON,
  GetMediaFilesCode200ResponseToJSON,
  GetProducts401ResponseFromJSON,
  GetProducts401ResponseToJSON,
  MediaFilesFromJSON,
  MediaFilesToJSON,
  PostMediaFilesRequestFromJSON,
  PostMediaFilesRequestToJSON,
} from "../models";

export interface GetMediaFilesRequest {
  page?: number;
  limit?: number;
  withCount?: boolean;
}

export interface GetMediaFilesCodeRequest {
  code: string;
}

export interface GetMediaFilesCodeDownloadRequest {
  code: string;
}

export interface PostMediaFilesOperationRequest {
  contentType: string;
  body?: PostMediaFilesRequest;
}

/**
 *
 */
export class ProductMediaFileApi extends runtime.BaseAPI {
  /**
   * This endpoint allows you to get a list of media files that are used as attribute values in products or product models.
   * Get a list of product media files
   */
  async getMediaFilesRaw(
    requestParameters: GetMediaFilesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<MediaFiles>> {
    const queryParameters: any = {};

    if (requestParameters.page !== undefined) {
      queryParameters["page"] = requestParameters.page;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters["limit"] = requestParameters.limit;
    }

    if (requestParameters.withCount !== undefined) {
      queryParameters["with_count"] = requestParameters.withCount;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/rest/v1/media-files`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      MediaFilesFromJSON(jsonValue)
    );
  }

  /**
   * This endpoint allows you to get a list of media files that are used as attribute values in products or product models.
   * Get a list of product media files
   */
  async getMediaFiles(
    requestParameters: GetMediaFilesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<MediaFiles> {
    const response = await this.getMediaFilesRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * This endpoint allows you to get the information about a given media file that is used as an attribute value of a product or a product model.
   * Get a product media file
   */
  async getMediaFilesCodeRaw(
    requestParameters: GetMediaFilesCodeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<GetMediaFilesCode200Response>> {
    if (
      requestParameters.code === null ||
      requestParameters.code === undefined
    ) {
      throw new runtime.RequiredError(
        "code",
        "Required parameter requestParameters.code was null or undefined when calling getMediaFilesCode."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/rest/v1/media-files/{code}`.replace(
          `{${"code"}}`,
          encodeURIComponent(String(requestParameters.code))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetMediaFilesCode200ResponseFromJSON(jsonValue)
    );
  }

  /**
   * This endpoint allows you to get the information about a given media file that is used as an attribute value of a product or a product model.
   * Get a product media file
   */
  async getMediaFilesCode(
    requestParameters: GetMediaFilesCodeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<GetMediaFilesCode200Response> {
    const response = await this.getMediaFilesCodeRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * This endpoint allows you to download a given media file that is used as an attribute value of a product or a product model.
   * Download a product media file
   */
  async getMediaFilesCodeDownloadRaw(
    requestParameters: GetMediaFilesCodeDownloadRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.code === null ||
      requestParameters.code === undefined
    ) {
      throw new runtime.RequiredError(
        "code",
        "Required parameter requestParameters.code was null or undefined when calling getMediaFilesCodeDownload."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/rest/v1/media-files/{code}/download`.replace(
          `{${"code"}}`,
          encodeURIComponent(String(requestParameters.code))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * This endpoint allows you to download a given media file that is used as an attribute value of a product or a product model.
   * Download a product media file
   */
  async getMediaFilesCodeDownload(
    requestParameters: GetMediaFilesCodeDownloadRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.getMediaFilesCodeDownloadRaw(requestParameters, initOverrides);
  }

  /**
   * This endpoint allows you to create a new media file and associate it to an attribute value of a given product or product model.
   * Create a new product media file
   */
  async postMediaFilesRaw(
    requestParameters: PostMediaFilesOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<void>> {
    if (
      requestParameters.contentType === null ||
      requestParameters.contentType === undefined
    ) {
      throw new runtime.RequiredError(
        "contentType",
        "Required parameter requestParameters.contentType was null or undefined when calling postMediaFiles."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (
      requestParameters.contentType !== undefined &&
      requestParameters.contentType !== null
    ) {
      headerParameters["Content-Type"] = String(requestParameters.contentType);
    }

    const response = await this.request(
      {
        path: `/api/rest/v1/media-files`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: PostMediaFilesRequestToJSON(requestParameters.body),
      },
      initOverrides
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * This endpoint allows you to create a new media file and associate it to an attribute value of a given product or product model.
   * Create a new product media file
   */
  async postMediaFiles(
    requestParameters: PostMediaFilesOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<void> {
    await this.postMediaFilesRaw(requestParameters, initOverrides);
  }
}
