-- name: AuthGetInitData :one
select idp_redirect_url, sp_entity_id
from saml_connections
where saml_connections.id = $1;

-- name: AuthGetValidateData :one
select saml_connections.sp_entity_id,
       saml_connections.idp_entity_id,
       saml_connections.idp_x509_certificate,
       environments.redirect_url
from saml_connections
         join organizations on saml_connections.organization_id = organizations.id
         join environments on organizations.environment_id = environments.id
where saml_connections.id = $1;

-- name: CreateSAMLLoginEvent :one
insert into saml_login_events (id, saml_connection_id, access_code, state, expire_time, subject_idp_id,
                               subject_idp_attributes)
values ($1, $2, $3, $4, $5, $6, $7)
returning *;

-- name: CreateSAMLLoginEventTimelineEntry :one
insert into saml_login_event_timeline_entries (id, saml_login_event_id, timestamp, type, get_redirect_url,
                                               saml_initiate_url, saml_receive_assertion_payload)
values ($1, $2, $3, $4, $5, $6, $7)
returning *;

-- name: AuthGetSAMLLoginEvent :one
select *
from saml_login_events
where id = $1
  and saml_connection_id = $2;

-- name: UpdateSAMLLoginEventSubjectData :one
update saml_login_events
set subject_idp_id         = $1,
    subject_idp_attributes = $2
where id = $3
returning *;

-- name: GetSAMLRedirectURLData :one
select environments.auth_url
from saml_connections
         join organizations on saml_connections.organization_id = organizations.id
         join environments on organizations.environment_id = environments.id
where environments.app_organization_id = $1
  and saml_connections.id = $2;

-- name: GetSAMLConnectionByID :one
select *
from saml_connections
where id = $1;

-- name: GetOrganizationByID :one
select *
from organizations
where id = $1;

-- name: GetEnvironmentByID :one
select *
from environments
where id = $1;

-- name: CreateSAMLSession :one
insert into saml_sessions (id, saml_connection_id, secret_access_token, subject_id, subject_idp_attributes)
values ($1, $2, $3, $4, $5)
returning *;

-- name: GetAPIKeyBySecretValue :one
select *
from api_keys
where secret_value = $1;

-- name: GetSAMLAccessCodeData :one
select saml_login_events.id      as saml_login_event_id,
       saml_login_events.subject_idp_id,
       saml_login_events.subject_idp_attributes,
       saml_login_events.state,
       organizations.id          as organization_id,
       organizations.external_id as organization_external_id,
       environments.id           as environment_id
from saml_login_events
         join saml_connections on saml_login_events.saml_connection_id = saml_connections.id
         join organizations on saml_connections.organization_id = organizations.id
         join environments on organizations.environment_id = environments.id
where environments.app_organization_id = $1
  and saml_login_events.access_code = $2;

-- name: GetAppUserByEmail :one
select *
from app_users
where email = $1;

-- name: GetAppUserByID :one
select *
from app_users
where app_organization_id = $1
  and id = $2;

-- name: GetAppOrganizationByGoogleHostedDomain :one
select *
from app_organizations
where google_hosted_domain = $1;

-- name: CreateAppOrganization :one
insert into app_organizations (id, google_hosted_domain)
values ($1, $2)
returning *;

-- name: CreateAppUser :one
insert into app_users (id, app_organization_id, display_name, email)
values ($1, $2, $3, $4)
returning *;

-- name: CreateAppSession :one
insert into app_sessions (id, app_user_id, create_time, expire_time, token)
values ($1, $2, $3, $4, $5)
returning *;

-- name: GetAppSessionByToken :one
select app_sessions.app_user_id, app_users.app_organization_id
from app_sessions
         join app_users on app_sessions.app_user_id = app_users.id
where token = $1
  and expire_time > $2;

-- name: ListEnvironments :many
select *
from environments
where app_organization_id = $1
  and id > $2
order by id
limit $3;

-- name: GetEnvironment :one
select *
from environments
where app_organization_id = $1
  and id = $2;

-- name: ListOrganizations :many
select *
from organizations
where environment_id = $1
  and id > $2
order by id
limit $3;

-- name: GetOrganization :one
select organizations.*
from organizations
         join environments on organizations.environment_id = environments.id
where environments.app_organization_id = $1
  and organizations.id = $2;

-- name: ListOrganizationDomains :many
select *
from organization_domains
where organization_id = any ($1::uuid[]);

-- name: ListSAMLConnections :many
select *
from saml_connections
where organization_id = $1
  and id > $2
order by id
limit $3;

-- name: GetSAMLConnection :one
select saml_connections.*
from saml_connections
         join organizations on saml_connections.organization_id = organizations.id
         join environments on organizations.environment_id = environments.id
where environments.app_organization_id = $1
  and saml_connections.id = $2;

-- name: CreateSAMLConnection :one
insert into saml_connections (id, organization_id, sp_entity_id)
values ($1, $2, $3)
returning *;

-- name: UpdateSAMLConnection :one
update saml_connections
set idp_entity_id        = $1,
    idp_redirect_url     = $2,
    idp_x509_certificate = $3
where id = $4
returning *;

-- name: ListSAMLLoginEvents :many
select *
from saml_login_events
where saml_connection_id = $1
  and id > $2
order by id
limit $3;

-- name: GetSAMLLoginEvent :one
select saml_login_events.*
from saml_login_events
         join saml_connections on saml_login_events.saml_connection_id = saml_connections.id
         join organizations on saml_connections.organization_id = organizations.id
         join environments on organizations.environment_id = environments.id
where environments.app_organization_id = $1
  and saml_login_events.id = $2;

-- name: ListSAMLLoginEventTimelineEntries :many
select *
from saml_login_event_timeline_entries
where saml_login_event_id = $1
  and (timestamp, id) > ($2, @id::uuid)
order by timestamp, id
limit $3;
