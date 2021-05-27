---
title: "API Helpers"
description: "Plugin helpers to use with serverless functions"
---
API helpers trigger lambda functions. Validation is performed server-side. For static sites, validation is performed in lambda functions.

## Access
Methods related to gated content.

```api.fetchUserRoles```

User must be logged in.

Fetch roles assigned to the current user from the api source.

```api.fetchVideoId```

User must be logged in.

Returns a decrypted video ID.

```api.addUserToRole```

User must be logged in.

Assigns a role to a user.

## User
Methods related to authentication.

```api.fetchMeta```

User must be logged in.

Fetches `app_metadata` and `user_metadata` from auth0.

```api.fetchUserMeta```

User must be logged in.

Fetches only `user_metadata`.

```api.setUserMeta```

User must be logged in.

Updates the auth0 `user_metadata`.

```api.fetchAppMeta```

User must be logged in.

Fetches `app_metadata`.

## Lib/functions

### Delegated Access Tokens
Some management permissions are required for certain API calls. As a result, management.js files contain the permissions for that delegated token.

### gatedContent
Encrypt or decrypt content that requires an access level.

### helpers/data.js
Interact with data files.

### validate
All routes require the user to be logged in first.