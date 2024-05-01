// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: ssoready/v1/ssoready.proto

package ssoreadyv1connect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	v1 "github.com/ssoready/ssoready/internal/gen/ssoready/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion0_1_0

const (
	// SSOReadyServiceName is the fully-qualified name of the SSOReadyService service.
	SSOReadyServiceName = "ssoready.v1.SSOReadyService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// SSOReadyServiceRedeemSAMLAccessTokenProcedure is the fully-qualified name of the
	// SSOReadyService's RedeemSAMLAccessToken RPC.
	SSOReadyServiceRedeemSAMLAccessTokenProcedure = "/ssoready.v1.SSOReadyService/RedeemSAMLAccessToken"
	// SSOReadyServiceSignInProcedure is the fully-qualified name of the SSOReadyService's SignIn RPC.
	SSOReadyServiceSignInProcedure = "/ssoready.v1.SSOReadyService/SignIn"
	// SSOReadyServiceWhoamiProcedure is the fully-qualified name of the SSOReadyService's Whoami RPC.
	SSOReadyServiceWhoamiProcedure = "/ssoready.v1.SSOReadyService/Whoami"
	// SSOReadyServiceListEnvironmentsProcedure is the fully-qualified name of the SSOReadyService's
	// ListEnvironments RPC.
	SSOReadyServiceListEnvironmentsProcedure = "/ssoready.v1.SSOReadyService/ListEnvironments"
	// SSOReadyServiceListOrganizationsProcedure is the fully-qualified name of the SSOReadyService's
	// ListOrganizations RPC.
	SSOReadyServiceListOrganizationsProcedure = "/ssoready.v1.SSOReadyService/ListOrganizations"
	// SSOReadyServiceListSAMLConnectionsProcedure is the fully-qualified name of the SSOReadyService's
	// ListSAMLConnections RPC.
	SSOReadyServiceListSAMLConnectionsProcedure = "/ssoready.v1.SSOReadyService/ListSAMLConnections"
)

// SSOReadyServiceClient is a client for the ssoready.v1.SSOReadyService service.
type SSOReadyServiceClient interface {
	RedeemSAMLAccessToken(context.Context, *connect.Request[v1.RedeemSAMLAccessTokenRequest]) (*connect.Response[v1.RedeemSAMLAccessTokenResponse], error)
	SignIn(context.Context, *connect.Request[v1.SignInRequest]) (*connect.Response[v1.SignInResponse], error)
	Whoami(context.Context, *connect.Request[v1.WhoamiRequest]) (*connect.Response[v1.WhoamiResponse], error)
	ListEnvironments(context.Context, *connect.Request[v1.ListEnvironmentsRequest]) (*connect.Response[v1.ListEnvironmentsResponse], error)
	ListOrganizations(context.Context, *connect.Request[v1.ListOrganizationsRequest]) (*connect.Response[v1.ListOrganizationsResponse], error)
	ListSAMLConnections(context.Context, *connect.Request[v1.ListSAMLConnectionsRequest]) (*connect.Response[v1.ListSAMLConnectionsResponse], error)
}

// NewSSOReadyServiceClient constructs a client for the ssoready.v1.SSOReadyService service. By
// default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses,
// and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewSSOReadyServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) SSOReadyServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &sSOReadyServiceClient{
		redeemSAMLAccessToken: connect.NewClient[v1.RedeemSAMLAccessTokenRequest, v1.RedeemSAMLAccessTokenResponse](
			httpClient,
			baseURL+SSOReadyServiceRedeemSAMLAccessTokenProcedure,
			opts...,
		),
		signIn: connect.NewClient[v1.SignInRequest, v1.SignInResponse](
			httpClient,
			baseURL+SSOReadyServiceSignInProcedure,
			opts...,
		),
		whoami: connect.NewClient[v1.WhoamiRequest, v1.WhoamiResponse](
			httpClient,
			baseURL+SSOReadyServiceWhoamiProcedure,
			opts...,
		),
		listEnvironments: connect.NewClient[v1.ListEnvironmentsRequest, v1.ListEnvironmentsResponse](
			httpClient,
			baseURL+SSOReadyServiceListEnvironmentsProcedure,
			opts...,
		),
		listOrganizations: connect.NewClient[v1.ListOrganizationsRequest, v1.ListOrganizationsResponse](
			httpClient,
			baseURL+SSOReadyServiceListOrganizationsProcedure,
			opts...,
		),
		listSAMLConnections: connect.NewClient[v1.ListSAMLConnectionsRequest, v1.ListSAMLConnectionsResponse](
			httpClient,
			baseURL+SSOReadyServiceListSAMLConnectionsProcedure,
			opts...,
		),
	}
}

// sSOReadyServiceClient implements SSOReadyServiceClient.
type sSOReadyServiceClient struct {
	redeemSAMLAccessToken *connect.Client[v1.RedeemSAMLAccessTokenRequest, v1.RedeemSAMLAccessTokenResponse]
	signIn                *connect.Client[v1.SignInRequest, v1.SignInResponse]
	whoami                *connect.Client[v1.WhoamiRequest, v1.WhoamiResponse]
	listEnvironments      *connect.Client[v1.ListEnvironmentsRequest, v1.ListEnvironmentsResponse]
	listOrganizations     *connect.Client[v1.ListOrganizationsRequest, v1.ListOrganizationsResponse]
	listSAMLConnections   *connect.Client[v1.ListSAMLConnectionsRequest, v1.ListSAMLConnectionsResponse]
}

// RedeemSAMLAccessToken calls ssoready.v1.SSOReadyService.RedeemSAMLAccessToken.
func (c *sSOReadyServiceClient) RedeemSAMLAccessToken(ctx context.Context, req *connect.Request[v1.RedeemSAMLAccessTokenRequest]) (*connect.Response[v1.RedeemSAMLAccessTokenResponse], error) {
	return c.redeemSAMLAccessToken.CallUnary(ctx, req)
}

// SignIn calls ssoready.v1.SSOReadyService.SignIn.
func (c *sSOReadyServiceClient) SignIn(ctx context.Context, req *connect.Request[v1.SignInRequest]) (*connect.Response[v1.SignInResponse], error) {
	return c.signIn.CallUnary(ctx, req)
}

// Whoami calls ssoready.v1.SSOReadyService.Whoami.
func (c *sSOReadyServiceClient) Whoami(ctx context.Context, req *connect.Request[v1.WhoamiRequest]) (*connect.Response[v1.WhoamiResponse], error) {
	return c.whoami.CallUnary(ctx, req)
}

// ListEnvironments calls ssoready.v1.SSOReadyService.ListEnvironments.
func (c *sSOReadyServiceClient) ListEnvironments(ctx context.Context, req *connect.Request[v1.ListEnvironmentsRequest]) (*connect.Response[v1.ListEnvironmentsResponse], error) {
	return c.listEnvironments.CallUnary(ctx, req)
}

// ListOrganizations calls ssoready.v1.SSOReadyService.ListOrganizations.
func (c *sSOReadyServiceClient) ListOrganizations(ctx context.Context, req *connect.Request[v1.ListOrganizationsRequest]) (*connect.Response[v1.ListOrganizationsResponse], error) {
	return c.listOrganizations.CallUnary(ctx, req)
}

// ListSAMLConnections calls ssoready.v1.SSOReadyService.ListSAMLConnections.
func (c *sSOReadyServiceClient) ListSAMLConnections(ctx context.Context, req *connect.Request[v1.ListSAMLConnectionsRequest]) (*connect.Response[v1.ListSAMLConnectionsResponse], error) {
	return c.listSAMLConnections.CallUnary(ctx, req)
}

// SSOReadyServiceHandler is an implementation of the ssoready.v1.SSOReadyService service.
type SSOReadyServiceHandler interface {
	RedeemSAMLAccessToken(context.Context, *connect.Request[v1.RedeemSAMLAccessTokenRequest]) (*connect.Response[v1.RedeemSAMLAccessTokenResponse], error)
	SignIn(context.Context, *connect.Request[v1.SignInRequest]) (*connect.Response[v1.SignInResponse], error)
	Whoami(context.Context, *connect.Request[v1.WhoamiRequest]) (*connect.Response[v1.WhoamiResponse], error)
	ListEnvironments(context.Context, *connect.Request[v1.ListEnvironmentsRequest]) (*connect.Response[v1.ListEnvironmentsResponse], error)
	ListOrganizations(context.Context, *connect.Request[v1.ListOrganizationsRequest]) (*connect.Response[v1.ListOrganizationsResponse], error)
	ListSAMLConnections(context.Context, *connect.Request[v1.ListSAMLConnectionsRequest]) (*connect.Response[v1.ListSAMLConnectionsResponse], error)
}

// NewSSOReadyServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewSSOReadyServiceHandler(svc SSOReadyServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	sSOReadyServiceRedeemSAMLAccessTokenHandler := connect.NewUnaryHandler(
		SSOReadyServiceRedeemSAMLAccessTokenProcedure,
		svc.RedeemSAMLAccessToken,
		opts...,
	)
	sSOReadyServiceSignInHandler := connect.NewUnaryHandler(
		SSOReadyServiceSignInProcedure,
		svc.SignIn,
		opts...,
	)
	sSOReadyServiceWhoamiHandler := connect.NewUnaryHandler(
		SSOReadyServiceWhoamiProcedure,
		svc.Whoami,
		opts...,
	)
	sSOReadyServiceListEnvironmentsHandler := connect.NewUnaryHandler(
		SSOReadyServiceListEnvironmentsProcedure,
		svc.ListEnvironments,
		opts...,
	)
	sSOReadyServiceListOrganizationsHandler := connect.NewUnaryHandler(
		SSOReadyServiceListOrganizationsProcedure,
		svc.ListOrganizations,
		opts...,
	)
	sSOReadyServiceListSAMLConnectionsHandler := connect.NewUnaryHandler(
		SSOReadyServiceListSAMLConnectionsProcedure,
		svc.ListSAMLConnections,
		opts...,
	)
	return "/ssoready.v1.SSOReadyService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case SSOReadyServiceRedeemSAMLAccessTokenProcedure:
			sSOReadyServiceRedeemSAMLAccessTokenHandler.ServeHTTP(w, r)
		case SSOReadyServiceSignInProcedure:
			sSOReadyServiceSignInHandler.ServeHTTP(w, r)
		case SSOReadyServiceWhoamiProcedure:
			sSOReadyServiceWhoamiHandler.ServeHTTP(w, r)
		case SSOReadyServiceListEnvironmentsProcedure:
			sSOReadyServiceListEnvironmentsHandler.ServeHTTP(w, r)
		case SSOReadyServiceListOrganizationsProcedure:
			sSOReadyServiceListOrganizationsHandler.ServeHTTP(w, r)
		case SSOReadyServiceListSAMLConnectionsProcedure:
			sSOReadyServiceListSAMLConnectionsHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedSSOReadyServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedSSOReadyServiceHandler struct{}

func (UnimplementedSSOReadyServiceHandler) RedeemSAMLAccessToken(context.Context, *connect.Request[v1.RedeemSAMLAccessTokenRequest]) (*connect.Response[v1.RedeemSAMLAccessTokenResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("ssoready.v1.SSOReadyService.RedeemSAMLAccessToken is not implemented"))
}

func (UnimplementedSSOReadyServiceHandler) SignIn(context.Context, *connect.Request[v1.SignInRequest]) (*connect.Response[v1.SignInResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("ssoready.v1.SSOReadyService.SignIn is not implemented"))
}

func (UnimplementedSSOReadyServiceHandler) Whoami(context.Context, *connect.Request[v1.WhoamiRequest]) (*connect.Response[v1.WhoamiResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("ssoready.v1.SSOReadyService.Whoami is not implemented"))
}

func (UnimplementedSSOReadyServiceHandler) ListEnvironments(context.Context, *connect.Request[v1.ListEnvironmentsRequest]) (*connect.Response[v1.ListEnvironmentsResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("ssoready.v1.SSOReadyService.ListEnvironments is not implemented"))
}

func (UnimplementedSSOReadyServiceHandler) ListOrganizations(context.Context, *connect.Request[v1.ListOrganizationsRequest]) (*connect.Response[v1.ListOrganizationsResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("ssoready.v1.SSOReadyService.ListOrganizations is not implemented"))
}

func (UnimplementedSSOReadyServiceHandler) ListSAMLConnections(context.Context, *connect.Request[v1.ListSAMLConnectionsRequest]) (*connect.Response[v1.ListSAMLConnectionsResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("ssoready.v1.SSOReadyService.ListSAMLConnections is not implemented"))
}