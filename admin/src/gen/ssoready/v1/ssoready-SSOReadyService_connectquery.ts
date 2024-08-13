// @generated by protoc-gen-connect-query v1.3.1 with parameter "target=ts"
// @generated from file ssoready/v1/ssoready.proto (package ssoready.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Empty, MethodKind } from "@bufbuild/protobuf";
import { AdminCreateSAMLConnectionRequest, AdminCreateSAMLConnectionResponse, AdminGetSAMLConnectionRequest, AdminGetSAMLConnectionResponse, AdminListSAMLConnectionsRequest, AdminListSAMLConnectionsResponse, AdminParseSAMLMetadataRequest, AdminParseSAMLMetadataResponse, AdminRedeemOneTimeTokenRequest, AdminRedeemOneTimeTokenResponse, AdminUpdateSAMLConnectionRequest, AdminUpdateSAMLConnectionResponse, APIKey, AppGetSCIMGroupRequest, AppGetSCIMUserRequest, AppListSCIMGroupsRequest, AppListSCIMGroupsResponse, AppListSCIMUsersRequest, AppListSCIMUsersResponse, CreateAdminSetupURLRequest, CreateAdminSetupURLResponse, CreateAPIKeyRequest, CreateEnvironmentRequest, CreateOrganizationRequest, CreateSAMLConnectionRequest, CreateSAMLOAuthClientRequest, CreateSCIMDirectoryRequest, DeleteAPIKeyRequest, DeleteSAMLOAuthClientRequest, Environment, GetAPIKeyRequest, GetAppOrganizationRequest, GetAppOrganizationResponse, GetEnvironmentRequest, GetOnboardingStateRequest, GetOnboardingStateResponse, GetOrganizationRequest, GetSAMLConnectionRequest, GetSAMLFlowRequest, GetSAMLOAuthClientRequest, GetSAMLRedirectURLRequest, GetSAMLRedirectURLResponse, GetSCIMDirectoryRequest, GetSCIMGroupRequest, GetSCIMGroupResponse, GetSCIMUserRequest, GetSCIMUserResponse, ListAPIKeysRequest, ListAPIKeysResponse, ListAppUsersRequest, ListAppUsersResponse, ListEnvironmentsRequest, ListEnvironmentsResponse, ListOrganizationsRequest, ListOrganizationsResponse, ListSAMLConnectionsRequest, ListSAMLConnectionsResponse, ListSAMLFlowsRequest, ListSAMLFlowsResponse, ListSAMLOAuthClientsRequest, ListSAMLOAuthClientsResponse, ListSCIMDirectoriesRequest, ListSCIMDirectoriesResponse, ListSCIMGroupsRequest, ListSCIMGroupsResponse, ListSCIMUsersRequest, ListSCIMUsersResponse, OnboardingGetSAMLRedirectURLRequest, OnboardingRedeemSAMLAccessCodeRequest, Organization, ParseSAMLMetadataRequest, ParseSAMLMetadataResponse, RedeemSAMLAccessCodeRequest, RedeemSAMLAccessCodeResponse, RotateSCIMDirectoryBearerTokenRequest, RotateSCIMDirectoryBearerTokenResponse, SAMLConnection, SAMLFlow, SAMLOAuthClient, SCIMDirectory, SCIMGroup, SCIMUser, SignInRequest, SignInResponse, SignOutRequest, SignOutResponse, UpdateEnvironmentRequest, UpdateOnboardingStateRequest, UpdateOrganizationRequest, UpdateSAMLConnectionRequest, UpdateSCIMDirectoryRequest, VerifyEmailRequest, WhoamiRequest, WhoamiResponse } from "./ssoready_pb.js";

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLRedirectURL
 */
export const getSAMLRedirectURL = {
  localName: "getSAMLRedirectURL",
  name: "GetSAMLRedirectURL",
  kind: MethodKind.Unary,
  I: GetSAMLRedirectURLRequest,
  O: GetSAMLRedirectURLResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.RedeemSAMLAccessCode
 */
export const redeemSAMLAccessCode = {
  localName: "redeemSAMLAccessCode",
  name: "RedeemSAMLAccessCode",
  kind: MethodKind.Unary,
  I: RedeemSAMLAccessCodeRequest,
  O: RedeemSAMLAccessCodeResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListSCIMUsers
 */
export const listSCIMUsers = {
  localName: "listSCIMUsers",
  name: "ListSCIMUsers",
  kind: MethodKind.Unary,
  I: ListSCIMUsersRequest,
  O: ListSCIMUsersResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSCIMUser
 */
export const getSCIMUser = {
  localName: "getSCIMUser",
  name: "GetSCIMUser",
  kind: MethodKind.Unary,
  I: GetSCIMUserRequest,
  O: GetSCIMUserResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListSCIMGroups
 */
export const listSCIMGroups = {
  localName: "listSCIMGroups",
  name: "ListSCIMGroups",
  kind: MethodKind.Unary,
  I: ListSCIMGroupsRequest,
  O: ListSCIMGroupsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSCIMGroup
 */
export const getSCIMGroup = {
  localName: "getSCIMGroup",
  name: "GetSCIMGroup",
  kind: MethodKind.Unary,
  I: GetSCIMGroupRequest,
  O: GetSCIMGroupResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.VerifyEmail
 */
export const verifyEmail = {
  localName: "verifyEmail",
  name: "VerifyEmail",
  kind: MethodKind.Unary,
  I: VerifyEmailRequest,
  O: Empty,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.SignIn
 */
export const signIn = {
  localName: "signIn",
  name: "SignIn",
  kind: MethodKind.Unary,
  I: SignInRequest,
  O: SignInResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.SignOut
 */
export const signOut = {
  localName: "signOut",
  name: "SignOut",
  kind: MethodKind.Unary,
  I: SignOutRequest,
  O: SignOutResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.Whoami
 */
export const whoami = {
  localName: "whoami",
  name: "Whoami",
  kind: MethodKind.Unary,
  I: WhoamiRequest,
  O: WhoamiResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetOnboardingState
 */
export const getOnboardingState = {
  localName: "getOnboardingState",
  name: "GetOnboardingState",
  kind: MethodKind.Unary,
  I: GetOnboardingStateRequest,
  O: GetOnboardingStateResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.UpdateOnboardingState
 */
export const updateOnboardingState = {
  localName: "updateOnboardingState",
  name: "UpdateOnboardingState",
  kind: MethodKind.Unary,
  I: UpdateOnboardingStateRequest,
  O: Empty,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.OnboardingGetSAMLRedirectURL
 */
export const onboardingGetSAMLRedirectURL = {
  localName: "onboardingGetSAMLRedirectURL",
  name: "OnboardingGetSAMLRedirectURL",
  kind: MethodKind.Unary,
  I: OnboardingGetSAMLRedirectURLRequest,
  O: GetSAMLRedirectURLResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.OnboardingRedeemSAMLAccessCode
 */
export const onboardingRedeemSAMLAccessCode = {
  localName: "onboardingRedeemSAMLAccessCode",
  name: "OnboardingRedeemSAMLAccessCode",
  kind: MethodKind.Unary,
  I: OnboardingRedeemSAMLAccessCodeRequest,
  O: RedeemSAMLAccessCodeResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetAppOrganization
 */
export const getAppOrganization = {
  localName: "getAppOrganization",
  name: "GetAppOrganization",
  kind: MethodKind.Unary,
  I: GetAppOrganizationRequest,
  O: GetAppOrganizationResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListAppUsers
 */
export const listAppUsers = {
  localName: "listAppUsers",
  name: "ListAppUsers",
  kind: MethodKind.Unary,
  I: ListAppUsersRequest,
  O: ListAppUsersResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListEnvironments
 */
export const listEnvironments = {
  localName: "listEnvironments",
  name: "ListEnvironments",
  kind: MethodKind.Unary,
  I: ListEnvironmentsRequest,
  O: ListEnvironmentsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetEnvironment
 */
export const getEnvironment = {
  localName: "getEnvironment",
  name: "GetEnvironment",
  kind: MethodKind.Unary,
  I: GetEnvironmentRequest,
  O: Environment,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateEnvironment
 */
export const createEnvironment = {
  localName: "createEnvironment",
  name: "CreateEnvironment",
  kind: MethodKind.Unary,
  I: CreateEnvironmentRequest,
  O: Environment,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.UpdateEnvironment
 */
export const updateEnvironment = {
  localName: "updateEnvironment",
  name: "UpdateEnvironment",
  kind: MethodKind.Unary,
  I: UpdateEnvironmentRequest,
  O: Environment,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListAPIKeys
 */
export const listAPIKeys = {
  localName: "listAPIKeys",
  name: "ListAPIKeys",
  kind: MethodKind.Unary,
  I: ListAPIKeysRequest,
  O: ListAPIKeysResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetAPIKey
 */
export const getAPIKey = {
  localName: "getAPIKey",
  name: "GetAPIKey",
  kind: MethodKind.Unary,
  I: GetAPIKeyRequest,
  O: APIKey,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateAPIKey
 */
export const createAPIKey = {
  localName: "createAPIKey",
  name: "CreateAPIKey",
  kind: MethodKind.Unary,
  I: CreateAPIKeyRequest,
  O: APIKey,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.DeleteAPIKey
 */
export const deleteAPIKey = {
  localName: "deleteAPIKey",
  name: "DeleteAPIKey",
  kind: MethodKind.Unary,
  I: DeleteAPIKeyRequest,
  O: Empty,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListSAMLOAuthClients
 */
export const listSAMLOAuthClients = {
  localName: "listSAMLOAuthClients",
  name: "ListSAMLOAuthClients",
  kind: MethodKind.Unary,
  I: ListSAMLOAuthClientsRequest,
  O: ListSAMLOAuthClientsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLOAuthClient
 */
export const getSAMLOAuthClient = {
  localName: "getSAMLOAuthClient",
  name: "GetSAMLOAuthClient",
  kind: MethodKind.Unary,
  I: GetSAMLOAuthClientRequest,
  O: SAMLOAuthClient,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateSAMLOAuthClient
 */
export const createSAMLOAuthClient = {
  localName: "createSAMLOAuthClient",
  name: "CreateSAMLOAuthClient",
  kind: MethodKind.Unary,
  I: CreateSAMLOAuthClientRequest,
  O: SAMLOAuthClient,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.DeleteSAMLOAuthClient
 */
export const deleteSAMLOAuthClient = {
  localName: "deleteSAMLOAuthClient",
  name: "DeleteSAMLOAuthClient",
  kind: MethodKind.Unary,
  I: DeleteSAMLOAuthClientRequest,
  O: Empty,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListOrganizations
 */
export const listOrganizations = {
  localName: "listOrganizations",
  name: "ListOrganizations",
  kind: MethodKind.Unary,
  I: ListOrganizationsRequest,
  O: ListOrganizationsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetOrganization
 */
export const getOrganization = {
  localName: "getOrganization",
  name: "GetOrganization",
  kind: MethodKind.Unary,
  I: GetOrganizationRequest,
  O: Organization,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateOrganization
 */
export const createOrganization = {
  localName: "createOrganization",
  name: "CreateOrganization",
  kind: MethodKind.Unary,
  I: CreateOrganizationRequest,
  O: Organization,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.UpdateOrganization
 */
export const updateOrganization = {
  localName: "updateOrganization",
  name: "UpdateOrganization",
  kind: MethodKind.Unary,
  I: UpdateOrganizationRequest,
  O: Organization,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateAdminSetupURL
 */
export const createAdminSetupURL = {
  localName: "createAdminSetupURL",
  name: "CreateAdminSetupURL",
  kind: MethodKind.Unary,
  I: CreateAdminSetupURLRequest,
  O: CreateAdminSetupURLResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListSAMLConnections
 */
export const listSAMLConnections = {
  localName: "listSAMLConnections",
  name: "ListSAMLConnections",
  kind: MethodKind.Unary,
  I: ListSAMLConnectionsRequest,
  O: ListSAMLConnectionsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLConnection
 */
export const getSAMLConnection = {
  localName: "getSAMLConnection",
  name: "GetSAMLConnection",
  kind: MethodKind.Unary,
  I: GetSAMLConnectionRequest,
  O: SAMLConnection,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateSAMLConnection
 */
export const createSAMLConnection = {
  localName: "createSAMLConnection",
  name: "CreateSAMLConnection",
  kind: MethodKind.Unary,
  I: CreateSAMLConnectionRequest,
  O: SAMLConnection,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.UpdateSAMLConnection
 */
export const updateSAMLConnection = {
  localName: "updateSAMLConnection",
  name: "UpdateSAMLConnection",
  kind: MethodKind.Unary,
  I: UpdateSAMLConnectionRequest,
  O: SAMLConnection,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListSAMLFlows
 */
export const listSAMLFlows = {
  localName: "listSAMLFlows",
  name: "ListSAMLFlows",
  kind: MethodKind.Unary,
  I: ListSAMLFlowsRequest,
  O: ListSAMLFlowsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSAMLFlow
 */
export const getSAMLFlow = {
  localName: "getSAMLFlow",
  name: "GetSAMLFlow",
  kind: MethodKind.Unary,
  I: GetSAMLFlowRequest,
  O: SAMLFlow,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ParseSAMLMetadata
 */
export const parseSAMLMetadata = {
  localName: "parseSAMLMetadata",
  name: "ParseSAMLMetadata",
  kind: MethodKind.Unary,
  I: ParseSAMLMetadataRequest,
  O: ParseSAMLMetadataResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.ListSCIMDirectories
 */
export const listSCIMDirectories = {
  localName: "listSCIMDirectories",
  name: "ListSCIMDirectories",
  kind: MethodKind.Unary,
  I: ListSCIMDirectoriesRequest,
  O: ListSCIMDirectoriesResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.GetSCIMDirectory
 */
export const getSCIMDirectory = {
  localName: "getSCIMDirectory",
  name: "GetSCIMDirectory",
  kind: MethodKind.Unary,
  I: GetSCIMDirectoryRequest,
  O: SCIMDirectory,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.CreateSCIMDirectory
 */
export const createSCIMDirectory = {
  localName: "createSCIMDirectory",
  name: "CreateSCIMDirectory",
  kind: MethodKind.Unary,
  I: CreateSCIMDirectoryRequest,
  O: SCIMDirectory,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.UpdateSCIMDirectory
 */
export const updateSCIMDirectory = {
  localName: "updateSCIMDirectory",
  name: "UpdateSCIMDirectory",
  kind: MethodKind.Unary,
  I: UpdateSCIMDirectoryRequest,
  O: SCIMDirectory,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.RotateSCIMDirectoryBearerToken
 */
export const rotateSCIMDirectoryBearerToken = {
  localName: "rotateSCIMDirectoryBearerToken",
  name: "RotateSCIMDirectoryBearerToken",
  kind: MethodKind.Unary,
  I: RotateSCIMDirectoryBearerTokenRequest,
  O: RotateSCIMDirectoryBearerTokenResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AppListSCIMUsers
 */
export const appListSCIMUsers = {
  localName: "appListSCIMUsers",
  name: "AppListSCIMUsers",
  kind: MethodKind.Unary,
  I: AppListSCIMUsersRequest,
  O: AppListSCIMUsersResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AppGetSCIMUser
 */
export const appGetSCIMUser = {
  localName: "appGetSCIMUser",
  name: "AppGetSCIMUser",
  kind: MethodKind.Unary,
  I: AppGetSCIMUserRequest,
  O: SCIMUser,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AppListSCIMGroups
 */
export const appListSCIMGroups = {
  localName: "appListSCIMGroups",
  name: "AppListSCIMGroups",
  kind: MethodKind.Unary,
  I: AppListSCIMGroupsRequest,
  O: AppListSCIMGroupsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AppGetSCIMGroup
 */
export const appGetSCIMGroup = {
  localName: "appGetSCIMGroup",
  name: "AppGetSCIMGroup",
  kind: MethodKind.Unary,
  I: AppGetSCIMGroupRequest,
  O: SCIMGroup,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AdminRedeemOneTimeToken
 */
export const adminRedeemOneTimeToken = {
  localName: "adminRedeemOneTimeToken",
  name: "AdminRedeemOneTimeToken",
  kind: MethodKind.Unary,
  I: AdminRedeemOneTimeTokenRequest,
  O: AdminRedeemOneTimeTokenResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AdminListSAMLConnections
 */
export const adminListSAMLConnections = {
  localName: "adminListSAMLConnections",
  name: "AdminListSAMLConnections",
  kind: MethodKind.Unary,
  I: AdminListSAMLConnectionsRequest,
  O: AdminListSAMLConnectionsResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AdminGetSAMLConnection
 */
export const adminGetSAMLConnection = {
  localName: "adminGetSAMLConnection",
  name: "AdminGetSAMLConnection",
  kind: MethodKind.Unary,
  I: AdminGetSAMLConnectionRequest,
  O: AdminGetSAMLConnectionResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AdminCreateSAMLConnection
 */
export const adminCreateSAMLConnection = {
  localName: "adminCreateSAMLConnection",
  name: "AdminCreateSAMLConnection",
  kind: MethodKind.Unary,
  I: AdminCreateSAMLConnectionRequest,
  O: AdminCreateSAMLConnectionResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AdminUpdateSAMLConnection
 */
export const adminUpdateSAMLConnection = {
  localName: "adminUpdateSAMLConnection",
  name: "AdminUpdateSAMLConnection",
  kind: MethodKind.Unary,
  I: AdminUpdateSAMLConnectionRequest,
  O: AdminUpdateSAMLConnectionResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;

/**
 * @generated from rpc ssoready.v1.SSOReadyService.AdminParseSAMLMetadata
 */
export const adminParseSAMLMetadata = {
  localName: "adminParseSAMLMetadata",
  name: "AdminParseSAMLMetadata",
  kind: MethodKind.Unary,
  I: AdminParseSAMLMetadataRequest,
  O: AdminParseSAMLMetadataResponse,
  service: {
    typeName: "ssoready.v1.SSOReadyService"
  }
} as const;
