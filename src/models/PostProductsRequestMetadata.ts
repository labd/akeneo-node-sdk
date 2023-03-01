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
 * More information around the product (only available since the v2.0 in the Enterprise Edition)
 * @export
 * @interface PostProductsRequestMetadata
 */
export interface PostProductsRequestMetadata {
    /**
     * Status of the product regarding the user permissions
     * @type {string}
     * @memberof PostProductsRequestMetadata
     */
    workflowStatus?: PostProductsRequestMetadataWorkflowStatusEnum;
}


/**
 * @export
 */
export const PostProductsRequestMetadataWorkflowStatusEnum = {
    ReadOnly: 'read_only',
    DraftInProgress: 'draft_in_progress',
    ProposalWaitingForApproval: 'proposal_waiting_for_approval',
    WorkingCopy: 'working_copy'
} as const;
export type PostProductsRequestMetadataWorkflowStatusEnum = typeof PostProductsRequestMetadataWorkflowStatusEnum[keyof typeof PostProductsRequestMetadataWorkflowStatusEnum];


/**
 * Check if a given object implements the PostProductsRequestMetadata interface.
 */
export function instanceOfPostProductsRequestMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostProductsRequestMetadataFromJSON(json: any): PostProductsRequestMetadata {
    return PostProductsRequestMetadataFromJSONTyped(json, false);
}

export function PostProductsRequestMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostProductsRequestMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workflowStatus': !exists(json, 'workflow_status') ? undefined : json['workflow_status'],
    };
}

export function PostProductsRequestMetadataToJSON(value?: PostProductsRequestMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workflow_status': value.workflowStatus,
    };
}
